package database

import (
	"fmt"
	"strings"

	"github.com/awtershokk/KKRITon-2024/backend/internal/models"
	"github.com/jmoiron/sqlx"
	"github.com/sirupsen/logrus"
)

type TeamPostgres struct {
	db *sqlx.DB
}

func NewTeamPostgres(db *sqlx.DB) *TeamPostgres {
	return &TeamPostgres{db: db}
}

func (r *TeamPostgres) Create(leaderId int, title string) (int, error) {
	tx, err := r.db.Begin()
	if err != nil {
		return 0, err
	}

	var id int
	createTeamQuery := fmt.Sprintf("INSERT INTO teams (leader_id, team_title) VALUES ($1, $2) RETURNING team_id")
	row := tx.QueryRow(createTeamQuery, leaderId, title)
	if err := row.Scan(&id); err != nil {
		tx.Rollback()
		return 0, err
	}

	updateUserTeamQuery := fmt.Sprintf("UPDATE users SET team_id=$1 WHERE user_id=$2")
	_, err = tx.Exec(updateUserTeamQuery, id, leaderId)
	if err != nil {
		tx.Rollback()
		return 0, err
	}

	return id, tx.Commit()
}

func (r *TeamPostgres) GetAll() ([]models.Team, error) {
	var teams []models.Team
	query := fmt.Sprintf("SELECT * FROM teams")
	err := r.db.Select(&teams, query)

	return teams, err
}

func (r *TeamPostgres) GetById(id int) (models.Team, error) {
	var team models.Team
	query := fmt.Sprintf("SELECT * FROM teams WHERE team_id=$1")
	err := r.db.Get(&team, query, id)

	return team, err
}

func (r *TeamPostgres) Update(id int, input models.TeamUpdateInput) error {
	setValues := make([]string, 0)
	args := make([]interface{}, 0)
	argId := 1

	if input.Title != nil {
		setValues = append(setValues, fmt.Sprintf("team_title=$%d", argId))
		args = append(args, *input.Title)
		argId++
	}

	if input.Leader != nil {
		setValues = append(setValues, fmt.Sprintf("leader_id=$%d", argId))
		args = append(args, *input.Leader)
		argId++
	}

	setQuery := strings.Join(setValues, ", ")

	query := fmt.Sprintf("UPDATE teams SET %s WHERE team_id=%s",
		setQuery, id)
	args = append(args, input.Leader, input.Title)

	logrus.Debugf("updateQuery: %s", query)
	logrus.Debugf("args: %s", args)

	_, err := r.db.Exec(query, args...)
	return err
}

func (r *TeamPostgres) AddMembers(team_id int, user_id int) error {
	query := fmt.Sprintf("UPDATE users SET team_id=%s WHERE user_id=%s", team_id, user_id)

	_, err := r.db.Exec(query)

	return err
}
