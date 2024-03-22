package services

import (
	"github.com/awtershokk/KKRITon-2024/backend/internal/database"
	"github.com/awtershokk/KKRITon-2024/backend/internal/models"
)

type TournamentService struct {
	repo database.Tournament
}

func NewTournamentService(repo database.Tournament) *TournamentService {
	return &TournamentService{repo: repo}
}

func (s *TournamentService) Create(title string, organizer int, status string, game int) (int, error) {
	return s.repo.Create(title, organizer, status, game)
}

func (s *TournamentService) GetAll() ([]models.Tournament, error) {
	return s.repo.GetAll()
}

func (s *TournamentService) GetById(id int) (models.Tournament, error) {
	return s.repo.GetById(id)
}
