package payload

import "go.mongodb.org/mongo-driver/bson/primitive"

type Employer struct {
	JobTitle      string `json:"jobTitle"`
	Phone         string `json:"phone"`
	CompanyName   string `json:"companyName"`
	Industry      string `json:"industry"`
	FoundedYear   string `json:"foundedYear"`
	CompanySize   string `json:"companySize"`
	CompanyType   string `json:"companyType"`
	Description   string `json:"description"`
	WebsiteURL    string `json:"websiteURL"`
	StreetAddress string `json:"streetAddress"`
	City          string `json:"city"`
	State         string `json:"state"`
	PostalCode    string `json:"postalCode"`
	Country       string `json:"country"`
	CompanyLogo   []byte `json:"companyLogo"`
}


type EmployerUpdate struct {
	ID          primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
	JobTitle      string `json:"jobTitle" bson:"jobTitle"`
	Phone         string `json:"phone" bson:"phone"`
	CompanyName   string `json:"companyName" bson:"companyName"`
	Industry      string `json:"industry" bson:"industry"`
	FoundedYear   string `json:"foundedYear" bson:"foundedYear"`
	CompanySize   string `json:"companySize" bson:"companySize"`
	CompanyType   string `json:"companyType" bson:"companyType"`
	Description   string `json:"description" bson:"description"`
	WebsiteURL    string `json:"websiteURL,omitempty" bson:"websiteURL,omitempty"`
	StreetAddress string `json:"streetAddress" bson:"streetAddress"`
	City          string `json:"city" bson:"city"`
	State         string `json:"state" bson:"state"`
	PostalCode    string `json:"postalCode" bson:"postalCode"`
	Country       string `json:"country" bson:"country"`
	// CompanyLogo   []byte `json:"companyLogo,omitempty" bson:"companyLogo,omitempty"` // File as []byte
}