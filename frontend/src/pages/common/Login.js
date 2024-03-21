import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title text-center">Авторизация</h3>
                        <div className="text-center mb-3">
                            Не зарегистрированы?{" "}
                            <Link to="/register" className="link-primary">
                                Зарегистрироваться
                            </Link>
                        </div>

                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Электронная почта</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>

                            <div className="d-grid gap-2">
                                <Button type="submit" variant="primary">
                                    Войти
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}