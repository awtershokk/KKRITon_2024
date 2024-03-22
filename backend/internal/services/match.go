package services

import "github.com/awtershokk/KKRITon-2024/backend/internal/database"

type MatchService struct {
	repo database.Match
}

func NewMatchService(repo database.Match) *MatchService {
	return &MatchService{repo: repo}
}

func (s *MatchService) Create(teamA int, teamB int, tournament int, stage int, game int) (int, error) {
	return s.repo.Create(teamA, teamB, tournament, stage, game)
}
