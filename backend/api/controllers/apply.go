package api

import (
	"backend/configs"
	"backend/utils"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"go.mongodb.org/mongo-driver/mongo"
	"log"
	"net/http"
	"net/smtp"
)

type JobApplication struct {
	UserID string `json:"userID" binding:"required,alphanum" msg:"UserID must contain alphabets and numbers only"`
	JobID  string `json:"jobID" binding:"required,alphanum" msg:"JobID must contain alphabets and numbers only"`
}

type EmailConfig struct {
	SMTPHost     string
	SMTPPort     int
	FromEmail    string
	FromPassword string
}

type CandidateInformation struct {
	fullName        string
	email           string
	contact         string
	linkedInProfile string
}

type EmployerInformation struct {
	employerName    string
	jobTitle        string
	applicationDate string
}

var emailConfig = EmailConfig{
	SMTPHost:     "smtp.gmail.com",
	SMTPPort:     587,
	FromEmail:    "nextjob.group1@gmail.com",
	FromPassword: "onxnmlggoetoycds",
}

var candidateInfo = CandidateInformation{
	fullName:        "John Doe",
	email:           "johndoe@example.com",
	contact:         "+1 123 456 7890",
	linkedInProfile: "https://www.linkedin.com/in/johndoe",
}

// Mock employer information
var employerInfo = EmployerInformation{
	employerName:    "Jane Smith",
	jobTitle:        "Software Engineer",
	applicationDate: "2023-07-19",
}

func ApplyJob(c *gin.Context) {

	var application JobApplication

	c.ShouldBindBodyWith(&application, binding.JSON)

	if ok, errMsg := utils.ValidateRequest(c, &JobApplication{}); !ok {
		c.IndentedJSON(http.StatusBadRequest, errMsg)
		return
	}

	collection := configs.Client.Database("jobportal").Collection("job_applications")

	_, err := collection.InsertOne(c, application)
	if err != nil {
		if mongo.IsDuplicateKeyError(err) {
			c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "Application already exists."})
			return
		} else {
			c.IndentedJSON(http.StatusInternalServerError, gin.H{"message": "Error while applying to the job"})
			return
		}

	}

	c.JSON(http.StatusCreated, gin.H{
		"message":           "Job Created",
		"applicationDetail": application,
	})
	notifyEmployerByEmail()
}

func notifyEmployerByEmail() {

	subject := "New Job Application for " + employerInfo.jobTitle + " - " + candidateInfo.fullName
	jobId := "123"
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
			<p>Dear ` + employerInfo.employerName + `,</p>
			<p>We are pleased to inform you that a potential candidate has applied for the job opening of <strong>` + employerInfo.jobTitle + `</strong> in your company. Below, you will find the relevant details regarding the candidate and their application:</p>
			<!-- Candidate Information section -->
			<h2>Candidate Information</h2>
			<ul>
				<li><strong>Full Name:</strong> ` + candidateInfo.fullName + `</li>
				<li><strong>Email Address:</strong> ` + candidateInfo.email + `</li>
				<li><strong>Phone Number:</strong> ` + candidateInfo.contact + `</li>
				<li><strong>LinkedIn Profile:</strong> <a href="` + candidateInfo.linkedInProfile + `">` + candidateInfo.linkedInProfile + `</a></li>
			</ul>
			<!-- Application Details section -->
			<h2>Application Details</h2>
			<ul>
				<li><strong>Job Title:</strong> ` + employerInfo.jobTitle + `</li>
				<li><strong>Job ID/Reference Number:</strong> ` + jobId + `</li>
				<li><strong>Application Date:</strong> ` + employerInfo.applicationDate + `</li>
			</ul>
			<p>We recommend reviewing the candidate's application thoroughly to evaluate their qualifications and suitability for the position.</p>
			<p>Please take the time to assess the candidate's application and consider scheduling an interview or taking the next steps in the hiring process. Should you have any specific requirements, questions, or further information needed from the candidate, feel free to reach out to them directly using the provided contact details.</p>
			<p>Thank you for utilizing our job portal for your recruitment needs. We are committed to providing you with a seamless and efficient hiring experience. If you have any inquiries or require assistance, please don't hesitate to contact our support team.</p>
			<p style="color: grey;">Best regards,<br>Kishan Patel<br>Software Developer<br>NextJob <br>+1 123 456 6743 | nextjob.group1@gmail.com</p>
		</body>
		</html>
	`

	err := sendEmail(emailConfig, "patelkishan9286@gmail.com", subject, htmlBody)
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
