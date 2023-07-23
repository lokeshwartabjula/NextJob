package api

import (
	"backend/configs"
	"backend/utils"
	"fmt"
	"log"
	"net/http"
	"net/smtp"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"go.mongodb.org/mongo-driver/mongo"
)

type RequestData struct {
	UserID            string `json:"userID" binding:"required,alphanum" msg:"UserID must contain alphabets and numbers only"`
	JobID             string `json:"jobID" binding:"required,alphanum" msg:"JobID must contain alphabets and numbers only"`
	CandidateFullName string `json:"fullName" binding:"required,alphanum" msg:"FullName must contain alphabets and numbers only"`
	CandidateEmail    string `json:"email" binding:"required,email" msg:"CandidateEmail must must be in a valid format"`
	Contact           string `json:"contact" binding:"required,alphanum" msg:"Contact must contain alphabets and numbers only"`
	EmployerName      string `json:"employerName" binding:"required,alphanum" msg:"EmployerName must contain alphabets and numbers only"`
	JobTitle          string `json:"jobTitle" binding:"required,alphanum" msg:"JobTitle must contain alphabets and numbers only"`
	ApplicationDate   string `json:"applicationDate" binding:"required,alphanum" msg:"ApplicationDate must contain alphabets and numbers only"`
	EmployerEmail     string `json:"employerEmail" binding:"required,email" msg:"EmployerEmail must be in a valid format"`
}

type JobApplication struct {
	userID string
	jobID  string
}
type EmailConfig struct {
	SMTPHost     string
	SMTPPort     int
	FromEmail    string
	FromPassword string
}

var emailConfig = EmailConfig{
	SMTPHost:     "smtp.gmail.com",
	SMTPPort:     587,
	FromEmail:    "nextjob.group1@gmail.com",
	FromPassword: "onxnmlggoetoycds",
}

func ApplyJob(c *gin.Context) {

	var requestData RequestData
	var jobApplication JobApplication

	c.ShouldBindBodyWith(&requestData, binding.JSON)

	if ok, errMsg := utils.ValidateRequest(c, &RequestData{}); !ok {
		c.IndentedJSON(http.StatusBadRequest, errMsg)
		return
	}

	collection := configs.Client.Database("jobportal").Collection("job_applications")
	jobApplication = JobApplication{userID: requestData.UserID, jobID: requestData.JobID}
	_, err := collection.InsertOne(c, jobApplication)
	if err != nil {
		if mongo.IsDuplicateKeyError(err) {
			c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "Application already exists."})
			return
		} else {
			c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": "Error while applying to the job"})
			return
		}
	}

	c.JSON(http.StatusCreated, gin.H{
		"message": "Job Created",
	})
	notifyEmployerByEmail(requestData)
}

func notifyEmployerByEmail(data RequestData) {

	subject := "New Job Application for " + data.JobTitle + " - " + data.CandidateFullName

	htmlBody := `
		<!DOCTYPE html>
		<html>
		<head>
			<style>
				/* Define your font styling here */
				body {
					font-family: Arial, sans-serif;
				}
				/* Add more CSS styles as desired */
			</style>
		</head>
		<body>
			<p>Dear ` + data.EmployerName + `,</p>
			<p>We are pleased to inform you that a potential candidate has applied for the job opening of <strong>` + data.JobTitle + `</strong> in your company. Below, you will find the relevant details regarding the candidate and their application:</p>
			<!-- Candidate Information section -->
			<h2>Candidate Information</h2>
			<ul>
				<li><strong>Full Name:</strong> ` + data.CandidateFullName + `</li>
				<li><strong>Email Address:</strong> ` + data.CandidateEmail + `</li>
				<li><strong>Phone Number:</strong> ` + data.Contact + `</li>		
			</ul>
			<!-- Application Details section -->
			<h2>Application Details</h2>
			<ul>
				<li><strong>Job Title:</strong> ` + data.JobTitle + `</li>
				<li><strong>Job ID/Reference Number:</strong> ` + data.JobID + `</li>
				<li><strong>Application Date:</strong> ` + data.ApplicationDate + `</li>
			</ul>
			<p>We recommend reviewing the candidate's application thoroughly to evaluate their qualifications and suitability for the position.</p>
			<p>Please take the time to assess the candidate's application and consider scheduling an interview or taking the next steps in the hiring process. Should you have any specific requirements, questions, or further information needed from the candidate, feel free to reach out to them directly using the provided contact details.</p>
			<p>Thank you for utilizing our job portal for your recruitment needs. We are committed to providing you with a seamless and efficient hiring experience. If you have any inquiries or require assistance, please don't hesitate to contact our support team.</p>
			<p style="color: grey;">Best regards,<br>Kishan Patel<br>Software Developer<br>NextJob <br>+1 123 456 6743 | nextjob.group1@gmail.com</p>
		</body>
		</html>
	`

	err := sendEmail(emailConfig, data.EmployerEmail, subject, htmlBody)
	if err != nil {
		log.Println("Failed to send email:", err)
	}

}
func sendEmail(emailConfig EmailConfig, employerEmail string, subject string, body string) error {
	auth := smtp.PlainAuth("", emailConfig.FromEmail, emailConfig.FromPassword, emailConfig.SMTPHost)

	to := []string{employerEmail}
	msg := []byte("To: " + employerEmail + "\r\n" +
		"Subject: " + subject + "\r\n" +
		"MIME-version: 1.0;\r\nContent-Type: text/html; charset=\"UTF-8\";\r\n\r\n" +
		body + "\r\n")

	addr := fmt.Sprintf("%s:%d", emailConfig.SMTPHost, emailConfig.SMTPPort)
	err := smtp.SendMail(addr, auth, emailConfig.FromEmail, to, msg)
	if err != nil {
		return err
	}

	return nil
}
