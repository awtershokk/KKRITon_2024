package database

import (
	"fmt"
	"strings"

	"github.com/awtershokk/KKRITon-2024/backend/internal/models"
	"github.com/jmoiron/sqlx"
	"github.com/sirupsen/logrus"
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

func (r *UserPostgres) Update(id int, input models.UserUpdateInput) error {
	setValues := make([]string, 0)
	args := make([]interface{}, 0)
	argId := 1

	if input.Lastname != nil {
		setValues = append(setValues, fmt.Sprintf("user_lastname=$%d", argId))
		args = append(args, *input.Lastname)
		argId++
	}

	if input.Name != nil {
		setValues = append(setValues, fmt.Sprintf("user_name=$%d", argId))
		args = append(args, *input.Name)
		argId++
	}

	if input.Nickname != nil {
		setValues = append(setValues, fmt.Sprintf("user_nickname=$%d", argId))
		args = append(args, *input.Nickname)
		argId++
	}

	if input.Team != nil {
		setValues = append(setValues, fmt.Sprintf("team_id=$%d", argId))
		args = append(args, *input.Team)
		argId++
	}

	setQuery := strings.Join(setValues, ", ")

	query := fmt.Sprintf("UPDATE users SET %s WHERE user_id=%s", setQuery, id)
	args = append(args, input.Lastname, input.Name, input.Nickname, input.Team)

	logrus.Debugf("updateQuery: %s", query)
	logrus.Debugf("args: %s", args)

	_, err := r.db.Exec(query, args...)
	return err
}
