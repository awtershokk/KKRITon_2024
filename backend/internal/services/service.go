package services

import (
	"github.com/awtershokk/KKRITon-2024/backend/internal/database"
	"github.com/awtershokk/KKRITon-2024/backend/internal/models"
)

type Authorization interface {
	CreateUser(user models.User) (int, error)
}

type User interface {
}

type Team interface {
}

type Tournament interface {
}

type Match interface {
}

type Resume interface {
}

type Application interface {
}

type Service struct {
	Authorization
	User
	Team
	Tournament
	Match
	Resume
	Application
}

func NewService(repo *database.Repository) *Service {
	return &Service{
		Authorization: NewAuthService(repo.Authorization),
	}
}
