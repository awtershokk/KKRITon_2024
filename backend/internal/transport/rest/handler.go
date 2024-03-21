package handler

import (
	"github.com/awtershokk/KKRITon-2024/backend/internal/services"
	"github.com/gin-gonic/gin"
)

type Handler struct {
	services *services.Service
}

func NewHandler(services *services.Service) *Handler {
	return &Handler{services: services}
}

func (h *Handler) InitRoutes() *gin.Engine {
	router := gin.New()

	auth := router.Group("/auth")
	{
		auth.POST("/sign-up", h.signUp)
		auth.POST("/sign-in", h.signIn)
	}

	api := router.Group("/api")
	{
		users := api.Group("/users")
		{
			users.GET("/", h.getAllUsers)
			users.GET("/:id", h.getUserById)
			users.PUT("/:id", h.updateUser)
		}

		teams := api.Group("/teams")
		{
			teams.POST("/", h.createTeam)
			teams.GET("/", h.getAllTeams)
			teams.GET("/:team_id", h.getTeamById)
			teams.PUT("/:team_id", h.updateTeam)
			teams.DELETE("/:team_id", h.deleteTeam)

			// resumes := api.Group("/resumes")
			// {
			// 	resumes.POST("/", h.createResume)
			// 	resumes.GET("/", h.getAllResumes)
			// 	resumes.GET("/:resume_id", h.getResumeById)
			// 	resumes.PUT("/:resume_id", h.acceptResume)
			// 	resumes.PUT("/:resume_id", h.rejectResume)
			// 	resumes.DELETE("/:resume_id", h.deleteResume)
			// }
		}

		tournaments := api.Group("/tournaments")
		{
			tournaments.POST("/", h.createTournament)
			tournaments.GET("/", h.getAllTournaments)
			tournaments.GET("/:tournament_id", h.getTournamentById)
			tournaments.PUT("/:tournament_id", h.updateTournament)
			tournaments.DELETE("/:tournament_id", h.deleteTournament)

			// applications := api.Group("/applications")
			// {
			// 	applications.POST("/", h.createApplication)
			// 	applications.GET("/", h.getAllApplications)
			// 	applications.GET("/:application_id", h.getApplicationById)
			// 	applications.PUT("/:application_id", h.acceptApplication)
			// 	applications.PUT("/:application_id", h.rejectApplication)
			// 	applications.DELETE("/:application_id", h.deleteApplication)
			// }
		}

		matches := api.Group("/matches")
		{
			matches.POST("/", h.createMatch)
			matches.GET("/", h.getAllMatches)
			matches.GET("/:match_id", h.getMatchById)
			matches.PUT("/:match_id", h.updateMatch)
			matches.DELETE("/:match_id", h.deleteMatch)
		}
	}

	return router
}
