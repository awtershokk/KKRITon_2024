package handler

import (
	"net/http"
	"strconv"

	"github.com/awtershokk/KKRITon-2024/backend/internal/models"
	"github.com/gin-gonic/gin"
)

type getAllUsersResponse struct {
	Data []models.User `json:"data"`
}

func (h *Handler) getAllUsers(c *gin.Context) {
	users, err := h.services.User.GetAll()
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, getAllUsersResponse{
		Data: users,
	})
}

func (h *Handler) getUserById(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("user_id"))
	if err != nil {
		newErrorResponse(c, http.StatusBadRequest, "Некорректный ID")
		return
	}

	user, err := h.services.User.GetById(id)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, user)
}

func (h *Handler) updateUser(c *gin.Context) {
	id, err := strconv.Atoi("user_id")
	if err != nil {
		newErrorResponse(c, http.StatusBadRequest, "Некорректный ID пользователя")
		return
	}

	var input models.UserUpdateInput
	if err := c.BindJSON(&input); err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	h.services.User.Update(id, input)
}
