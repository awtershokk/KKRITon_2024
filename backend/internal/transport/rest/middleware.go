package handler

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

func (h *Handler) userIdentity(c *gin.Context) {
	header := c.GetHeader("Authorization")
	if header == "" {
		newErrorResponse(c, http.StatusUnauthorized, "Пустой заголовок токена")
		return
	}

	headerParts := strings.Split(header, " ")
	if len(headerParts) != 2 {
		newErrorResponse(c, http.StatusUnauthorized, "Некорректный заголовок токена")
		return
	}

	userId, err := h.services.Authorization.ParseToken(headerParts[1])
	if err != nil {
		newErrorResponse(c, http.StatusUnauthorized, err.Error())
		return
	}

	c.Set("userId", userId)
}

// func getUserId(c *gin.Context) (int, error) {
// 	id, ok := c.Get(userCtx)
// 	if !ok {
// 		return 0, errors.New("user id not found")
// 	}

// 	idInt, ok := id.(int)
// 	if !ok {
// 		return 0, errors.New("user id is of invalid type")
// 	}

// 	return idInt, nil
// }
