package api

import (
	"backend/configs"
	"backend/models/db"
	"backend/models/payload"
	"backend/utils"
	"context"
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

func CreateJob(c *gin.Context) {
	var requestPayload payload.CreateJobPayload
	c.ShouldBindBodyWith(&requestPayload, binding.JSON)

	fmt.Println("request Payload for CreateJob API ==>", requestPayload)

	ok, errMsg := utils.ValidateRequest(c, &payload.CreateJobPayload{})
	if !ok {
		c.JSON(400, errMsg)
		return
	}

	collection := configs.Client.Database("jobportal").Collection("jobs")

	indexModel := mongo.IndexModel{
		Keys: bson.D{{Key: "location", Value: "2dsphere"}},
	}

	name, err := collection.Indexes().CreateOne(context.TODO(), indexModel)
	if err != nil {
		panic(err)
	}

	fmt.Println("name ==>", name)
	success, err := collection.InsertOne(context.TODO(), db.Job{
		JobTitle:       requestPayload.JobTitle,
		JobDescription: requestPayload.JobDescription,
		Skills:         requestPayload.Skills,
		JobStatus:      requestPayload.JobStatus,
		NoOfPositions:  requestPayload.NoOfPositions,
		JobType:        requestPayload.JobType,
		Salary:         requestPayload.Salary,
		Experience:     requestPayload.Experience,
		OpenDate:       requestPayload.OpenDate,
		Location: db.JobLocation{
			Type:        "Point",
			Coordinates: []float64{requestPayload.JobLocation.Lng, requestPayload.JobLocation.Lat},
			PlaceID:     requestPayload.JobLocation.PlaceId,
			PlaceName:  requestPayload.JobLocation.PlaceName,
		},
		EmployerId:     requestPayload.EmployerId,
	})

	if err != nil {
		c.JSON(500, gin.H{
			"message": "Error while creating job",
		})
		return
	}

	fmt.Println("Inserted a document to db ==>", success.InsertedID)

	c.JSON(200, gin.H{
		"message": "Job Successfully Created",
	})
}

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

func UpdateJob(c *gin.Context) {
	var requestPayload payload.CreateJobPayload
	c.ShouldBindBodyWith(&requestPayload, binding.JSON)

	fmt.Println("request Payload for UpdateJob API ==>", requestPayload)

	collection := configs.Client.Database("jobportal").Collection("jobs")
	requestObjectID, errObjectId := primitive.ObjectIDFromHex(requestPayload.Id.Hex())

	if errObjectId != nil {
		c.JSON(500, gin.H{
			"message": "Error while updating job",
		})
		return
	}

	success, err := collection.UpdateOne(context.Background(), bson.M{"_id": requestObjectID}, bson.M{
		"$set": db.Job{
			JobTitle:       requestPayload.JobTitle,
		JobDescription: requestPayload.JobDescription,
		Skills:         requestPayload.Skills,
		JobStatus:      requestPayload.JobStatus,
		NoOfPositions:  requestPayload.NoOfPositions,
		JobType:        requestPayload.JobType,
		Salary:         requestPayload.Salary,
		Experience:     requestPayload.Experience,
		OpenDate:       requestPayload.OpenDate,
		Location: db.JobLocation{
			Type:        "Point",
			Coordinates: []float64{requestPayload.JobLocation.Lng, requestPayload.JobLocation.Lat},
			PlaceID:     requestPayload.JobLocation.PlaceId,
			PlaceName:  requestPayload.JobLocation.PlaceName,
		},
		EmployerId:     requestPayload.EmployerId,
		},
	})

	if err != nil {
		fmt.Println("Error while updating job ==>", err)
		c.JSON(500, gin.H{
			"message": "Error while updating job",
		})
		return
	}

	fmt.Println("Updated a document to db ==>", success)

	c.JSON(200, gin.H{
		"message": "Job Successfully Updated",
	})
}

func DeleteJob(c *gin.Context) {
	requestId := c.Param("id")

	collection := configs.Client.Database("jobportal").Collection("jobs")
	objectId, errObjectId := primitive.ObjectIDFromHex(requestId)

	if errObjectId != nil {
		c.JSON(500, gin.H{
			"message": "Error while deleting job",
		})
		return
	}

	success, err := collection.DeleteOne(context.Background(), bson.M{"_id": objectId})

	if err != nil {
		c.JSON(500, gin.H{
			"message": "Error while deleting job",
		})
		return
	}

	fmt.Println("Deleted a document from db ==>", success)

	c.JSON(200, gin.H{
		"message": "Job Successfully Deleted",
	})
}