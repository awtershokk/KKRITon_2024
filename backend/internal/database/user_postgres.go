package database

import (
	"fmt"

	"github.com/awtershokk/KKRITon-2024/backend/internal/models"
	"github.com/jmoiron/sqlx"
)

type UserPostgres struct {
	db *sqlx.DB
}

func NewUserPostgres(db *sqlx.DB) *UserPostgres {
	return &UserPostgres{db: db}
}

func (r *UserPostgres) GetAll() ([]models.User, error) {
	var users []models.User
	query := fmt.Sprintf("SELECT users.user_id, users.user_name, users.user_lastname, users.user_email, users.team_id, users.role, users.user_nickname FROM users")
	err := r.db.Select(&users, query)

	return users, err
}

func (r *UserPostgres) GetById(id int) (models.User, error) {
	var user models.User
	query := fmt.Sprintf("SELECT users.user_id, users.user_name, users.user_lastname, users.user_email, users.team_id, users.role, users.user_nickname FROM users WHERE user_id=$1")
	err := r.db.Get(&user, query, id)

	return user, err
}
