package models

type User struct {
	Id       int    `json:"-" db:"user_id"`
	Nickname string `json:"nickname" db:"user_nickname" binding:"required"`
	Name     string `json:"name" db:"user_name" binding:"required"`
	Lastname string `json:"lastname" db:"user_lastname" binding:"required"`
	Email    string `json:"email" db:"user_email" binding:"required"`
	Password string `json:"password" binding:"required"`
	Role     string `json:"role" db:"role" binding:"required"`
	Team     *int   `json:"team_id" db:"team_id"`
}
