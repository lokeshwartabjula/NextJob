/**
Author: Kruti Panchal
Banner Id : B00930563
Email-Id: kr946702@dal.ca
*/

package api

import (
	"context"
	"net/http"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"

	"backend/configs"
	"backend/models/db"
)

func GetUserById(c *gin.Context) {
	requestID := c.Param("id")

	collection := configs.Client.Database("jobportal").Collection("users")

	objectID, errObjectID := primitive.ObjectIDFromHex(requestID)
	if errObjectID != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "Invalid user ID",
		})
		return
	}

	filter := bson.M{"_id": objectID}

	var user db.User
	err := collection.FindOne(context.Background(), filter).Decode(&user)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "Error while fetching user data",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"user": user,
	})
}