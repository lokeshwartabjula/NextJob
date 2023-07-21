package main

import (
	"net/http"

	"github.com/gin-gonic/gin"

	api "backend/api/controllers"
	"backend/configs"
)

func main() {
	router := gin.Default()

	configs.ConnectDB()

	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"resp": "Hello World"})
	})
	router.POST("/login", api.Login)
	router.POST("/register", api.Register)

	router.Run(":8080")
}
