package models

type User struct {
	Id       int    `json:"-" db:"user_id"`
	Nickname string `json:"nickname" binding:"required"`
	Name     string `json:"name" binding:"required"`
	Lastname string `json:"lastname" binding:"required"`
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
	Role     string `json:"role" binding:"required"`
	Team     int    `json:"team_id"`
}
