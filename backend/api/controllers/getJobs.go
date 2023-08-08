/**
Author: Kruti Panchal
Banner Id: B00930563
Email id: kr946702@dal.ca
*/

package api

import (
	"backend/configs"
	"backend/models/db"

	// "backend/models/payload"
	// "backend/utils"
	"context"
	// "fmt"
	// "strconv"

	"github.com/gin-gonic/gin"
	// "github.com/gin-gonic/gin/binding"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	// "go.mongodb.org/mongo-driver/mongo"
)

func GetJobs(c *gin.Context) {
	collection := configs.Client.Database("jobportal").Collection("jobs")
	cursor, err := collection.Find(context.Background(), bson.M{})

	if err != nil {
		c.JSON(500, gin.H{
			"message": "Error while getting jobs",
		})
		return
	}

	var jobs db.Job
	var jobsList []db.Job

	for cursor.Next(context.Background()) {
		cursor.Decode(&jobs)
		jobsList = append(jobsList, jobs)
	}

	c.JSON(200, gin.H{
		"jobs": jobsList,
	})
}

func GetJobById(c *gin.Context) {
	requestId := c.Param("id")

	collection := configs.Client.Database("jobportal").Collection("jobs")
	objectId, errObjectId := primitive.ObjectIDFromHex(requestId)

	if errObjectId != nil {
		c.JSON(500, gin.H{
			"message": "Error while getting job",
		})
		return
	}

	cursor, err := collection.Find(context.Background(), bson.M{"_id": objectId})

	if err != nil {
		c.JSON(500, gin.H{
			"message": "Error while getting job",
		})
		return
	}

	var jobs db.Job
	var jobsList []db.Job

	for cursor.Next(context.Background()) {
		cursor.Decode(&jobs)
		jobsList = append(jobsList, jobs)
	}

	c.JSON(200, gin.H{
		"jobs": jobsList,
	})
}
