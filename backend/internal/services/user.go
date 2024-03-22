package services

import (
	"github.com/awtershokk/KKRITon-2024/backend/internal/database"
	"github.com/awtershokk/KKRITon-2024/backend/internal/models"
)

type UserService struct {
	repo database.User
}

func NewUserService(repo database.User) *UserService {
	return &UserService{repo: repo}
}

func (s *UserService) GetAll() ([]models.User, error) {
	return s.repo.GetAll()
}

func (s *UserService) GetById(id int) (models.User, error) {
	return s.repo.GetById(id)
}

func (s *UserService) Update(id int, input models.UserUpdateInput) error {
	return s.repo.Update(id, input)
}
