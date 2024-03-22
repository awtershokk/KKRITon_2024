package models

type Match struct {
	Id         int  `json:"id" db:"match_id"`
	TeamA      int  `json:"teamA" db:"team_a_id" binding:"required"`
	TeamB      int  `json:"teamB" db:"team_b_id" binding:"required"`
	Tournament int  `json:"tournament" db:"tournament_id" binding:"required"`
	Stage      int  `json:"status" db:"stage" binding:"required"`
	Winner     *int `json:"winner" db:"match_winner"`
	Game       int  `json:"game" db:"game_id" binding:"required"`
}
