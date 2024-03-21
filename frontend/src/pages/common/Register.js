import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Registration() {
    return (
        <div className="Register-form-container">
            <Form className="Register-form">
                <div className="Register-form-content">
                    <h3 className="Register-form-title">Регистрация</h3>
                    <div className="text-center">
                        Уже зарегистрированы?{" "}
                        <Link to="/" className="link-primary">
                            Войти
                        </Link>
                    </div>
                    <Form.Group className="mt-3">
                        <Form.Label>Выберите роль</Form.Label>
                        <Form.Select className="form-control mt-1">
                            <option value="player">Игрок</option>
                            <option value="organizer">Организатор</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Электронная почта</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <div className="d-grid gap-2 mt-3">
                        <Button type="submit" variant="primary">
                            Регистрация
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    );
}
