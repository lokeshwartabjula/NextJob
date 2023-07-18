package payload

type CreateUserPayload struct {
	FirstName string `json:"firstName" binding:"required,alpha" msg:"First Name must contain alphabets only"`
	Email     string `json:"email" binding:"required,email" msg:"Invalid Email Address"`
	Password  string `json:"password" binding:"required,alphanum" msg:"Password must contain alphabets and numbers only"`
}

type LoginUserPayload struct {
	Email    string `json:"email" binding:"required,email" msg:"Invalid Email Address"`
	Password string `json:"password" binding:"required,alphanum" msg:"Password must contain alphabets and numbers only"`
}
