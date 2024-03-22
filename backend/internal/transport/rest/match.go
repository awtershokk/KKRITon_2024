package handler

import (
	"net/http"

	"github.com/awtershokk/KKRITon-2024/backend/internal/models"
	"github.com/gin-gonic/gin"
)

func (h *Handler) createMatch(c *gin.Context) {
	var input models.Match
	if err := c.BindJSON(&input); err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	id, err := h.services.Match.Create(input.TeamA, input.TeamB, input.Tournament, input.Stage, input.Game)

	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, map[string]interface{}{
		"id": id,
	})
}

func (h *Handler) getAllMatches(c *gin.Context) {

}

func (h *Handler) getMatchById(c *gin.Context) {

}

func (h *Handler) updateMatch(c *gin.Context) {

}

func (h *Handler) deleteMatch(c *gin.Context) {

}
