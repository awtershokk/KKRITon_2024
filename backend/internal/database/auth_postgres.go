package database

import (
	"fmt"

	"github.com/awtershokk/KKRITon-2024/backend/internal/models"
	"github.com/jmoiron/sqlx"
)

type AuthPostgres struct {
	db *sqlx.DB
}

func NewAuthPostgres(db *sqlx.DB) *AuthPostgres {
	return &AuthPostgres{db: db}
}

func (r *AuthPostgres) CreateUser(user models.User) (int, error) {
	var id int
	query := fmt.Sprintf("INSERT INTO users (user_nickname, user_name, user_lastname, user_email, pass_hash, role) values ($1, $2, $3, $4, $5, $6) RETURNING user_id")

	row := r.db.QueryRow(query, user.Nickname, user.Name, user.Lastname, user.Email, user.Password, user.Role)

	if err := row.Scan(&id); err != nil {
		return 0, err
	}

	return id, nil
}

func (r *AuthPostgres) GetUser(nickname, password string) (models.User, error) {
	var user models.User
	query := fmt.Sprintf("SELECT user_id FROM users WHERE user_nickname=$1 and pass_hash=$2")
	err := r.db.Get(&user, query, nickname, password)

	return user, err
}
