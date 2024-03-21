package models

type Resume struct {
	Id       int    `json:"id"`
	AuthorID int    `json:"author_id"`
	Status   string `json:"status"`
}

type ResumesList struct {
	Id       int
	ResumeId int
	ListId   int
}
