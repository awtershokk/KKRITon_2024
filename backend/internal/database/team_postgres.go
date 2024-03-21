package database

import (
	"fmt"

	"github.com/awtershokk/KKRITon-2024/backend/internal/models"
	"github.com/jmoiron/sqlx"
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
