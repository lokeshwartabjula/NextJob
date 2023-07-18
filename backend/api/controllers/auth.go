package api

import (
	"backend/configs"
	"backend/models/db"
	"backend/models/payload"
	"backend/utils"
	"context"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"go.mongodb.org/mongo-driver/bson"
)

func Register(c *gin.Context) {
	var requestPayload payload.CreateUserPayload
	c.ShouldBindBodyWith(&requestPayload, binding.JSON)
	fmt.Print("request Payload for Register API ==>", requestPayload)
	ok, errMsg := utils.ValidateRequest(c, &payload.CreateUserPayload{})

	if !ok {
		c.JSON(http.StatusBadRequest, errMsg)
		return
	}

	coll := configs.Client.Database("jobportal").Collection("users")
	result := coll.FindOne(context.TODO(), bson.M{
		"email": requestPayload.Email,
	})

	if result.Err() == nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "User already exists"})
		return
	}

	insertResult, err := coll.InsertOne(context.TODO(), db.User{FirstName: requestPayload.FirstName, Email: requestPayload.Email, Password: requestPayload.Password})

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Error while registering user"})
		return
	}

	fmt.Println("Inserted a document to db ==>", insertResult.InsertedID)

	c.IndentedJSON(http.StatusOK, gin.H{"message": "User registered successfully"})
}

func Login(c *gin.Context) {
	var requestPayload payload.LoginUserPayload
	c.ShouldBindBodyWith(&requestPayload, binding.JSON)
	fmt.Print("request Payload for Login API ==>", requestPayload)
	ok, errMsg := utils.ValidateRequest(c, &payload.LoginUserPayload{})

	if !ok {
		c.JSON(http.StatusBadRequest, errMsg)
		return
	}

	coll := configs.Client.Database("jobportal").Collection("users")
	result := coll.FindOne(context.TODO(), bson.M{
		"email":    requestPayload.Email,
		"password": requestPayload.Password,
	})

	if result.Err() != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Invalid credentials"})
		return
	}

	var user db.User
	err := result.Decode(&user)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Error while decoding user"})
		return
	}

	fmt.Println("Found a single document:", user.Email)

	token := utils.GenerateJWT()

	fmt.Println("JWT Token ==>", token)

	c.IndentedJSON(http.StatusOK, gin.H{"message": "User logged in successfully"})
}