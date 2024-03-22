package models

type Team struct {
	Id     int    `json:"id" db:"team_id"`
	Title  string `json:"title" db:"team_title" binding:"required"`
	Leader int    `json:"leader" db:"leader_id" binding:"required"`
	// Resumes     int    `json:"resumes"`
}

type TeamUpdateInput struct {
	Title  *string `json:"title"`
	Leader *int    `json:"leader"`
}

type AddMemberInput struct {
	UserId int `json:"user_id" binding:"required"`
}
