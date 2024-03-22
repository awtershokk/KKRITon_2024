package database

import (
	"fmt"

	"github.com/awtershokk/KKRITon-2024/backend/internal/models"
	"github.com/jmoiron/sqlx"
)

type TournamentPostgres struct {
	db *sqlx.DB
}

func NewTournamentPostgres(db *sqlx.DB) *TournamentPostgres {
	return &TournamentPostgres{db: db}
}

func (r *TournamentPostgres) Create(title string, organizer int, status string, game int) (int, error) {
	tx, err := r.db.Begin()
	if err != nil {
		return 0, err
	}

	var id int
	createTournamentQuery := fmt.Sprintf("INSERT INTO tournaments (tournament_title, organizer_id, tournament_status, game_id) VALUES ($1, $2, $3, $4) RETURNING tournament_id")
	row := tx.QueryRow(createTournamentQuery, title, organizer, status, game)
	if err := row.Scan(&id); err != nil {
		tx.Rollback()
		return 0, err
	}

	return id, tx.Commit()
}

func (r *TournamentPostgres) GetAll() ([]models.Tournament, error) {
	var tournaments []models.Tournament
	query := fmt.Sprintf("SELECT * FROM tournaments")
	err := r.db.Select(&tournaments, query)

	return tournaments, err
}

func (r *TournamentPostgres) GetById(id int) (models.Tournament, error) {
	var tournament models.Tournament
	query := fmt.Sprintf("SELECT * FROM tournaments WHERE tournament_id=$1")
	err := r.db.Get(&tournament, query, id)

	return tournament, err
}
