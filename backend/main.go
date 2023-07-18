package main

import (
	"net/http"

	"github.com/gin-gonic/gin"

	api "backend/api/controllers"
	"backend/configs"
	"backend/middlewares"
)

func main() {
	configs.ConnectDB()

	router := gin.Default()

	// public routes. No need to add Authorization header to request these routes. The API would look like this: http://localhost:8080/pub/
	public := router.Group("/pub")
	public.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"resp": "Hello World without JWT token"})
	})
	public.POST("/login", api.Login)
	public.POST("/register", api.Register)

	// protected routes. For this routes you need to add Authorization header which contains JWT token. The API would look like this: http://localhost:8080/api/
	protected := router.Group("/api")
	protected.Use(middlewares.JwtAuthMiddleware())
	protected.GET(("/"), func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"resp": "Hello World with JWT token"})
	})

	router.Run(":8080")
}
