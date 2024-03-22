import Header from "./Header";
import {Button, Container, Form} from "react-bootstrap";
import React from "react";
import CreateOrder from "../pages/player/CreateOrder";
const OrderCard = ({ name, id, discipline}) => {
    return (
        <div>

            <Container className="custom-container mt-5">
                <h1>Создание заявки</h1>

                <Form>
                    <div className="mb-1">
                        <Form.Label> Турнир: {name}</Form.Label>
                    </div>
                    <div className="mb-1">
                        <Form.Label> Дисциплина: {discipline}</Form.Label>
                    </div>
                    <div className="mb-1">
                        <Form.Label>ID: {id}</Form.Label>
                    </div>

                    <Form.Group className="mb-3">
                        <Form.Label>Выберите команду:</Form.Label>
                        <Form.Control as="select">
                            <option value="option1">Команда 1</option>
                            <option value="option2">Команда 2</option>
                        </Form.Control>
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button type="submit" variant="primary">
                            Оставить заявку
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
};
export default OrderCard;