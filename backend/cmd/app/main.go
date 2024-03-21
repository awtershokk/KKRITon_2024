package main

import (
	"os"

	"github.com/awtershokk/KKRITon-2024/backend/internal/app"
	"github.com/awtershokk/KKRITon-2024/backend/internal/database"
	"github.com/awtershokk/KKRITon-2024/backend/internal/services"
	handler "github.com/awtershokk/KKRITon-2024/backend/internal/transport/rest"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
	"github.com/sirupsen/logrus"
	"github.com/spf13/viper"
)

func main() {
	logrus.SetFormatter(new(logrus.JSONFormatter))

	if err := initConfig(); err != nil {
		logrus.Fatalf("Ошибка инициализации конфига: %s", err)
	}

	if err := godotenv.Load(); err != nil {
		logrus.Fatalf("Ошибка загрузки переменных окружения: %s", err.Error())
	}

	db, err := database.NewPostgresDB(database.Config{
		Host:     viper.GetString("db.address"),
		Port:     viper.GetString("db.port"),
		Username: viper.GetString("db.username"),
		DBName:   viper.GetString("db.dbname"),
		SSLMode:  viper.GetString("db.sslmode"),
		Password: os.Getenv("DB_PASSWORD"),
	})
	if err != nil {
		logrus.Fatalf("Ошибка инициализации базы данных: %s", err.Error())
	}

	repos := database.NewRepository(db)
	services := services.NewService(repos)
	handler := handler.NewHandler(services)

	srv := new(app.Server)
	if err := srv.Run(viper.GetString("port"), handler.InitRoutes()); err != nil {
		logrus.Fatalf("Ошибка при запуске HTTP-Сервера: %s", err.Error())
	}
}

func initConfig() error {
	viper.AddConfigPath("configs")
	viper.SetConfigName("config")
	return viper.ReadInConfig()
}
