package models

type Application struct {
	Id       int    `json:"id"`
	AuthorID int    `json:"author_id"`
	Status   string `json:"status"`
}
