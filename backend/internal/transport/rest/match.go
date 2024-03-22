package handler

import (
	"net/http"
	"strconv"

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

type getAllMatchesResponse struct {
	Data []models.Match `json:"data"`
}

func (h *Handler) getAllMatches(c *gin.Context) {
	matches, err := h.services.Match.GetAll()
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, getAllMatchesResponse{
		Data: matches,
	})
}

func (h *Handler) getMatchById(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("match_id"))
	if err != nil {
		newErrorResponse(c, http.StatusBadRequest, "Некорректный ID")
		return
	}

	match, err := h.services.Match.GetById(id)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, match)
}

func (h *Handler) updateMatch(c *gin.Context) {

}

func (h *Handler) deleteMatch(c *gin.Context) {

}
