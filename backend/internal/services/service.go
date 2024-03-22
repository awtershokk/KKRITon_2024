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
	GetAll() ([]models.User, error)
	GetById(id int) (models.User, error)
}

type Team interface {
	Create(leaderId int, title string) (int, error)
	GetAll() ([]models.Team, error)
	GetById(id int) (models.Team, error)
}

type Tournament interface {
	Create(title string, organizer int, status string, game int) (int, error)
	GetAll() ([]models.Tournament, error)
	GetById(id int) (models.Tournament, error)
}

type Match interface {
	Create(teamA int, teamB int, tournament int, stage int, game int) (int, error)
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
		Tournament:    NewTournamentService(repo.Tournament),
		Match:         NewMatchService(repo.Match),
	}
}
