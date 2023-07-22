package api

import (
	"backend/configs"
	"backend/models/db"
	"context"
	"fmt"
	"strconv"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
)

func GetJobByRadius(c *gin.Context) {
	latParam := c.Param("lat")
	lngParam := c.Param("lng")

	fmt.Println("latParam ==>", latParam)
	fmt.Println("lngParam ==>", lngParam)

	floatLat, floatLatErr := strconv.ParseFloat(latParam, 64)
	floatLng, floatLngErr := strconv.ParseFloat(lngParam, 64)

	if floatLatErr != nil || floatLngErr != nil {
		fmt.Println("Error while converting lat and lng to float ==>", floatLatErr, floatLngErr)
		c.JSON(500, gin.H{
			"message": "Error whiladsde getting jobs",
		})
		return
	}

	collection := configs.Client.Database("jobportal").Collection("jobs")

	dataCheck := bson.D{{Key: "type", Value: "Point"}, {Key: "coordinates", Value: []float64{floatLng, floatLat}}}
	filter := bson.D{
		{Key: "location", Value: bson.D{
			{Key: "$near", Value: bson.D{
				{Key: "$geometry", Value: dataCheck},
				{Key: "$maxDistance", Value: 3000},
			}},
		}},
	}

	var places []db.Job
	cursor, err := collection.Find(context.TODO(), filter)
	if err != nil {
		fmt.Println("Error while getting jobs ==>", err)
		c.JSON(500, gin.H{
			"message": "Error while getting jobs",
		})
		return
	}

	cursor.All(context.TODO(), &places)

	fmt.Println("places ==>", places)

	c.JSON(200, gin.H{
		"jobs": places,
	})
}
