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

func corsMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
        c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
        c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

        if c.Request.Method == "OPTIONS" {
            c.AbortWithStatus(200)
            return
        }

        c.Next()
    }
}

func (h *Handler) InitRoutes() *gin.Engine {
    router := gin.New()

    router.Use(corsMiddleware())

    auth := router.Group("/auth")
    {
        auth.POST("/sign-up", h.signUp)
        auth.POST("/sign-in", h.signIn)
    }

    api := router.Group("/api", h.userIdentity)
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
        }



    }

    return router
}
