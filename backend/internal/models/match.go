package models

type Match struct {
	Id           int    `json:"id"`
	Participants []Team `json:"participants"`
	Status       string `json:"status"`
	Winner       Team   `json:"winner"`
}

type MatchesList struct {
	Id      int
	MatchId int
	ListId  int
}
