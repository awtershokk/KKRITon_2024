package models

type Team struct {
	Id          int          `json:"id"`
	Leader      User         `json:"leader"`
	Members     []User       `json:"members"`
	Resumes     []Resume     `json:"resumes"`
	Tournaments []Tournament `json:"tournaments"`
}

type TeamsList struct {
	Id     int
	TeamId int
	ListId int
}
