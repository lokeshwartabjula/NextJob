/*
Author: Jeet Mehta
Banner ID: B00945900
Email ID: jt429386@dal.ca
*/

package payload

type CreateUserPayload struct {
	FirstName string `json:"firstName" binding:"required,alpha" msg:"First Name must contain alphabets only"`
	LastName  string `json:"lastName" binding:"required,alpha" msg:"Last Name must contain alphabets only"`
	Email     string `json:"email" binding:"required,email" msg:"Invalid Email Address"`
	Password  string `json:"password" binding:"required,alphanum" msg:"Password must contain alphabets and numbers only"`
}

type LoginUserPayload struct {
	Email     string `json:"email" binding:"required,email" msg:"Invalid Email Address"`
	Password  string `json:"password"`
	LoginType string `json:"loginType"`
}
