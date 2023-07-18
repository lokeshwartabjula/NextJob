package middlewares

import (
	"backend/utils"

	"github.com/gin-gonic/gin"
)

func JwtAuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		err := utils.VerifyToken(c.Request.Header.Get("Authorization"))
		if !err {
			c.JSON(401, gin.H{"message": "Authorization Token Invalid..."})
			c.Abort()
			return
		}

		c.Next()
	}
}
