package models

type Team struct {
	Id     int    `json:"id" db:"team_id"`
	Title  string `json:"title" db:"team_title" binding:"required"`
	Leader int    `json:"leader" db:"leader_id" binding:"required"`
	// Resumes     int    `json:"resumes"`
}
