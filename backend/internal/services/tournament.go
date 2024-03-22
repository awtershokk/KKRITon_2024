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

func (s *TournamentService) Create(title string, organizer int, status string, game string, startDate string, endDate string) (int, error) {
	return s.repo.Create(title, organizer, status, game, startDate, endDate)
}

func (s *TournamentService) GetAll() ([]models.Tournament, error) {
	return s.repo.GetAll()
}

func (s *TournamentService) GetById(id int) (models.Tournament, error) {
	return s.repo.GetById(id)
}

func (s *TournamentService) GetTournamentMatches(id int) ([]models.Match, error) {
	return s.repo.GetTournamentMatches(id)
}
