import React, { useState } from 'react';
import Header from '../../components/Header';
import { Button, Form, Container } from "react-bootstrap";
import axios from 'axios'; // Импорт axios
import "../../styles/CreateTournament.css";

export default function IndexOrganizer() {
    const [tournamentData, setTournamentData] = useState({
        title: "",
        organizer: 11, // Пример значения организатора
        game: "",
        status: "",
        start_date: "",
        end_date: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        // Формируем объект данных для отправки
        const postData = {
            title: tournamentData.title,
            organizer: tournamentData.organizer,
            game: tournamentData.game,
            status: tournamentData.status,
            start_date: tournamentData.start_date,
            end_date: tournamentData.end_date
        };

        axios.post('http://localhost:8000/api/tournaments', postData)
            .then(response => {
                console.log('Success:', response.data);
            })
            .catch(error => {
                console.error('ОШИБКА:', error);
            });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTournamentData({ ...tournamentData, [name]: value });
    };

    return (
        <div>
            <Header />
            <Container className="custom-container mt-5">
                <h1>Создание турнира</h1>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Название турнира</Form.Label>
                        <Form.Control type="text" name="title" value={tournamentData.title} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Дисциплина</Form.Label>
                        <Form.Select className="form-control mt-1" name="game" value={tournamentData.game} onChange={handleChange}>
                            <option value="Dota 2">Dota 2</option>
                            <option value="CS 2">CS 2</option>
                            <option value="Warface">Warface</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Дата начала</Form.Label>
                        <Form.Control type="date" name="start_date" value={tournamentData.start_date} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Дата окончания</Form.Label>
                        <Form.Control type="date" name="end_date" value={tournamentData.end_date} onChange={handleChange} />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button type="submit" variant="primary">
                            Создать турнир
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
};
