/*
Author: Jeet Mehta
Banner ID: B00945900
Email ID: jt429386@dal.ca
*/

package payload

import "go.mongodb.org/mongo-driver/bson/primitive"

type CreateJobPayload struct {
	Id             primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	JobTitle       string             `json:"jobTitle" binding:"required" msg:"Job Title is required"`
	JobDescription string             `json:"jobDescription" binding:"required" msg:"Job Description is required"`
	Skills         []string           `json:"skills" binding:"required" msg:"Skills are required"`
	JobStatus      string             `json:"jobStatus" binding:"required" msg:"Job Status is required"`
	NoOfPositions  string             `json:"noOfPositions" binding:"required" msg:"Number of Positions is required"`
	JobType        string             `json:"jobType" binding:"required" msg:"Job Type is required"`
	JobLocation    JobLocationPayload `json:"location" binding:"required" msg:"Job Location is required"`
	Salary         string             `json:"salary" binding:"required" msg:"Salary is required"`
	Experience     string             `json:"experience" binding:"required" msg:"Experience is required"`
	OpenDate       string             `json:"openDate" binding:"required" msg:"Open Date is required"`
	EmployerId     primitive.ObjectID `bson:"employerId" json:"employerId" binding:"required" msg:"Employer ID is required"`
	JobCompany     string             `json:"jobCompany" binding:"required" msg:"Job Company is required"`
	JobCompanyLogo string             `json:"jobCompanyLogo" binding:"required" msg:"Job Company Logo is required"`
	EmployerEmail string 		   `json:"employerEmail" binding:"required" msg:"Employer Email is required"`
}

type JobLocationPayload struct {
	Lng       float64 `json:"lng" binding:"required" msg:"Longitude is required"`
	Lat       float64 `json:"lat" binding:"required" msg:"Latitude is required"`
	PlaceId   string  `json:"placeId" binding:"required" msg:"Place ID is required"`
	PlaceName string  `json:"placeName" binding:"required" msg:"Place Name is required"`
	City      string  `json:"city" binding:"required" msg:"City is required"`
	State     string  `json:"state" binding:"required" msg:"State is required"`
	Country   string  `json:"country" binding:"required" msg:"Country is required"`
}
