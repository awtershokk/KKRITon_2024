package handler

import (
	"net/http"

	"github.com/awtershokk/KKRITon-2024/backend/internal/models"
	"github.com/gin-gonic/gin"
)

func (h *Handler) createTeam(c *gin.Context) {
	var input models.Team
	if err := c.BindJSON(&input); err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	id, err := h.services.Team.Create(input.Leader, input.Title)

	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, map[string]interface{}{
		"id": id,
	})
}

type getAllTeamsResponse struct {
	Data []models.Team `json:"data"`
}

func (h *Handler) getAllTeams(c *gin.Context) {
	teams, err := h.services.Team.GetAll()
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, getAllTeamsResponse{
		Data: teams,
	})
}

func (h *Handler) getTeamById(c *gin.Context) {

}

func (h *Handler) updateTeam(c *gin.Context) {

}

func (h *Handler) deleteTeam(c *gin.Context) {

}
