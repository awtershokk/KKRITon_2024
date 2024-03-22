package database

import (
	"fmt"

	"github.com/jmoiron/sqlx"
)

type MatchPostgres struct {
	db *sqlx.DB
}

func NewMatchPostgres(db *sqlx.DB) *MatchPostgres {
	return &MatchPostgres{db: db}
}

func (r *MatchPostgres) Create(teamA int, teamB int, tournament int, stage int, game int) (int, error) {
	tx, err := r.db.Begin()
	if err != nil {
		return 0, err
	}

	var id int
	createMatchQuery := fmt.Sprintf("INSERT INTO matches (team_a_id, team_b_id, tournament_id, stage, game_id) VALUES ($1, $2, $3, $4, $5) RETURNING match_id")
	row := tx.QueryRow(createMatchQuery, teamA, teamB, tournament, stage, game)
	if err := row.Scan(&id); err != nil {
		tx.Rollback()
		return 0, err
	}

	return id, tx.Commit()
}
