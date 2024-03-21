package models

type Tournament struct {
	Id           int           `json:"id"`
	Organizer    User          `json:"organizer"`
	Participants []User        `json:"participants"`
	Applications []Application `json:"applications"`
	Matches      []Match       `json:"matches"`
	Status       string        `json:"status"`
}

type TournamentsList struct {
	Id           int
	TournamentId int
	ListId       int
}
