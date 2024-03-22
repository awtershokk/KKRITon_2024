package handler

import (
	"net/http"
	"strconv"

	"github.com/awtershokk/KKRITon-2024/backend/internal/models"
	"github.com/gin-gonic/gin"
)

func (h *Handler) createTournament(c *gin.Context) {
	var input models.Tournament
	if err := c.BindJSON(&input); err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	id, err := h.services.Tournament.Create(input.Title, input.Organizer, input.Status, *input.Game, *input.StartDate, *input.EndDate)

	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, map[string]interface{}{
		"id": id,
	})
}

type getAllTournamentsResponse struct {
	Data []models.Tournament `json:"data"`
}

func (h *Handler) getAllTournaments(c *gin.Context) {
	tournaments, err := h.services.Tournament.GetAll()
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, getAllTournamentsResponse{
		Data: tournaments,
	})
}

func (h *Handler) getTournamentById(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("tournament_id"))
	if err != nil {
		newErrorResponse(c, http.StatusBadRequest, "Некорректный ID")
		return
	}

	tournament, err := h.services.Tournament.GetById(id)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, tournament)
}

func (h *Handler) getTournamentMatches(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("tournament_id"))
	if err != nil {
		newErrorResponse(c, http.StatusBadRequest, "Некорректный ID")
		return
	}

	matches, err := h.services.Tournament.GetTournamentMatches(id)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, matches)
}

func (h *Handler) updateTournament(c *gin.Context) {

}

func (h *Handler) deleteTournament(c *gin.Context) {

}
