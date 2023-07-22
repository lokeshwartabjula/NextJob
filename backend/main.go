package main

import (
	"net/http"

	"github.com/gin-gonic/gin"

	api "backend/api/controllers"
	"backend/configs"
	"backend/middlewares"
)

func main() {
	router := gin.Default()
	
	router.Use(middlewares.CorsMiddleware())
	
	configs.ConnectDB()

	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"resp": "Hello World"})
	})
	router.POST("/login", api.Login)
	router.POST("/register", api.Register)
	router.POST("/createJob", api.CreateJob)
	router.GET("/getJobs", api.GetJobs)
	router.GET("/getJob/:id", api.GetJobById)
	router.PUT("/updateJob", api.UpdateJob)
	router.DELETE("/deleteJob/:id", api.DeleteJob)

	router.Run(":8080")
}
