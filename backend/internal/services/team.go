package services

import (
	"github.com/awtershokk/KKRITon-2024/backend/internal/database"
	"github.com/awtershokk/KKRITon-2024/backend/internal/models"
)

type TeamService struct {
	repo database.Team
}

func NewTeamService(repo database.Team) *TeamService {
	return &TeamService{repo: repo}
}

func (s *TeamService) Create(leaderId int, title string) (int, error) {
	return s.repo.Create(leaderId, title)
}

func (s *TeamService) GetAll() ([]models.Team, error) {
	return s.repo.GetAll()
}

func (s *TeamService) GetById(id int) (models.Team, error) {
	return s.repo.GetById(id)
}
