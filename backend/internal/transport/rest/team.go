package handler

import (
	"net/http"

	"github.com/awtershokk/KKRITon-2024/backend/internal/models"
	"github.com/gin-gonic/gin"
)

func (h *Handler) createTeam(c *gin.Context) {
	id, ok := c.Get("userId")
	if !ok {
		newErrorResponse(c, http.StatusInternalServerError, "Пользователь не найден")
		return
	}

	var input models.Team

}

func (h *Handler) getAllTeams(c *gin.Context) {

}

func (h *Handler) getTeamById(c *gin.Context) {

}

func (h *Handler) updateTeam(c *gin.Context) {

}

func (h *Handler) deleteTeam(c *gin.Context) {

}
