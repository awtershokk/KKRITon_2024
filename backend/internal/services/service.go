package services

import (
	"github.com/awtershokk/KKRITon-2024/backend/internal/database"
	"github.com/awtershokk/KKRITon-2024/backend/internal/models"
)

type Authorization interface {
	CreateUser(user models.User) (int, error)
	GenerateToken(nickname, password string) (string, error)
	ParseToken(token string) (int, error)
}

type User interface {
	GetById(id int) (models.User, error)
}

type Team interface {
	Create(leaderId int, title string) (int, error)
	GetAll() ([]models.Team, error)
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
		Team:          NewTeamService(repo.Team),
		User:          NewUserService(repo.User),
	}
}
