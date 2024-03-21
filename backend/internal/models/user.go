package models

type User struct {
	Id       int    `json:"id"`
	Nickname string `json:"nickname" binding:"required"`
	Name     string `json:"name" binding:"required"`
	Lastname string `json:"lastname" binding:"required"`
	Password string `json:"password" binding:"required"`
	Role     int    `json:"role" binding:"required"`
	Team     int    `json:"team_id" binding:"required"`
}
