import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
    return (
        <div className="Login-form-container">
            <Form className="Login-form">
                <div className="Login-form-content">
                    <h3 className="Login-form-title">Авторизация</h3>
                    <div className="text-center">
                        Не зарегистрированы?{" "}
                        <Link to="/register" className="link-primary">
                            Зарегистрироваться
                        </Link>
                    </div>
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
                            Войти
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    );
}
