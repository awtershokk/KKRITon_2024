package models

type Tournament struct {
	Id           int     `json:"id" db:"tournament_id"`
	Title        string  `json:"title" db:"tournament_title" binding:"required"`
	Organizer    int     `json:"organizer" db:"organizer_id" binding:"required"`
	Participants *[]int  `json:"participants" db:"participants_id"`
	Status       string  `json:"status" db:"tournament_status" binding:"required"`
	Game         *string    `json:"game" db:"game_id" binding:"required"`
	StartDate    *string `json:"start_date" db:"start_date" binding:"required"`
	EndDate      *string `json:"end_date" db:"end_date" binding:"required"`
}
