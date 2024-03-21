import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Registration() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            nickname: e.target.elements.nickname.value,
            name: e.target.elements.name.value,
            lastname: e.target.elements.lastname.value,
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
            role: e.target.elements.role.value
        };

        console.log(formData)

        try {
            const response = await axios.post('http://localhost:8000/auth/sign-up', formData);
            console.log(response.data);
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title text-center">Регистрация</h3>
                        <div className="text-center mb-3">
                            Уже зарегистрированы?{" "}
                            <Link to="/" className="link-primary">
                                Войти
                            </Link>
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Выберите роль</Form.Label>
                                <Form.Select name="role" className="form-control mt-1">
                                    <option value="player">Игрок</option>
                                    <option value="organizer">Организатор</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Никнейм</Form.Label>
                                <Form.Control name="nickname" type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Имя</Form.Label>
                                <Form.Control name="name" type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Фамилия</Form.Label>
                                <Form.Control name="lastname" type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Электронная почта</Form.Label>
                                <Form.Control name="email" type="email" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control name="password" type="password" />
                            </Form.Group>

                            <div className="d-grid gap-2">
                                <Button type="submit" variant="primary">
                                    Регистрация
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}