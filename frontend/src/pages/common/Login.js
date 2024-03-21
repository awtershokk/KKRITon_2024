import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Login() {
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/auth/sign-in", {
                nickname,
                password
            });
            console.log("Вход выполнен успешно!");
            console.log(response.data);
        } catch (error) {
            console.error("Ошибка при выполнении входа:", error);
        }
    };

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

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Никнейм</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={nickname}
                                    onChange={(e) => setNickname(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
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