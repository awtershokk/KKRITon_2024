package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h *Handler) getAllUsers(c *gin.Context) {

}

func (h *Handler) getUserById(c *gin.Context) {
	id, _ := c.Get("userId")
	c.JSON(http.StatusOK, map[string]interface{}{
		"id": id,
	})
}

func (h *Handler) updateUser(c *gin.Context) {

}
