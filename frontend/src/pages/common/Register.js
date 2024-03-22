import React, { useState } from 'react';
import Header from '../../components/Header';
import { Button, Form, Container } from "react-bootstrap";
import axios from 'axios';
import "../../styles/CreateTournament.css";

export default function IndexOrganizer() {
    const [formData, setFormData] = useState({
        title: "",
        organizer: 1,
        participants: "null",
        status: "",
        game: "",
        start_date: "",
        end_date: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/tournaments', formData)
            .then(response => {
                console.log('Success:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <Header />
            <Container className="custom-container mt-5">
                <h1>Создание турнира</h1>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Никнейм</Form.Label>
                        <Form.Control type="text" name="nickname" value={formData.nickname} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Роль</Form.Label>
                        <Form.Control as="select" name="role" value={formData.role} onChange={handleChange}>
                            <option value="player">Игрок</option>
                            <option value="organizer">Организатор</option>
                        </Form.Control>
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
