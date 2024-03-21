package database

import (
	"github.com/awtershokk/KKRITon-2024/backend/internal/models"
	"github.com/jmoiron/sqlx"
)

type Authorization interface {
	CreateUser(user models.User) (int, error)
	GetUser(nickname, password string) (models.User, error)
}

type User interface {
}

type Team interface {
}

type Tournament interface {
}

type Resume interface {
}

type Application interface {
}

type Match interface {
}

type Repository struct {
	Authorization
	User
	Team
	Tournament
	Resume
	Application
	Match
}

func NewRepository(db *sqlx.DB) *Repository {
	return &Repository{
		Authorization: NewAuthPostgres(db),
	}
}
