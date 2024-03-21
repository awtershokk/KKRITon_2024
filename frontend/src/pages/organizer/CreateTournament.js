import React from 'react';

import Header from '../../components/Header';
import {Button, Form} from "react-bootstrap";

export default function IndexOrganizer() {
    return (
        <div>
            <Header/>
            <h1>Создание турнира</h1>

            <Form.Group className="mb-3">
                <Form.Label>Название турнира</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>

            {/*Сделать чтобы тут первой отображалась дисциплина из прошлой страницы*/}
            <Form.Group className="mb-3">
                <Form.Label>Дисциплина</Form.Label>
                <Form.Select className="form-control mt-1">
                    <option value="player">Dota 2</option>
                    <option value="organizer">CS 2</option>
                    <option value="organizer">Warface</option>
                </Form.Select>
            </Form.Group>

            {/*Список команд из БД*/}
            <Form.Group className="mb-3">
                <Form.Label>Команда 1</Form.Label>
                <Form.Select className="form-control mt-1">
                    <option value="player">Команда 1</option>
                    <option value="organizer">Команда 2</option>
                    <option value="organizer">Команда 3</option>
                </Form.Select>


            </Form.Group>

            {/*Список команд из БД*/}
            <Form.Group className="mb-3">
                <Form.Label>Команда 2</Form.Label>
                <Form.Select className="form-control mt-1">
                    <option value="player">Команда 1</option>
                    <option value="organizer">Команда 2</option>
                    <option value="organizer">Команда 3</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Уровень турнира</Form.Label>
                <Form.Select className="form-control mt-1">
                    <option value="player">Районный</option>
                    <option value="organizer">Городской</option>
                    <option value="organizer">Краевой</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Дата начала</Form.Label>
                <Form.Control type="date"/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Дата окончания</Form.Label>
                <Form.Control type="date"/>
            </Form.Group>

            <div className="d-grid gap-2">
                <Button type="submit" variant="primary">
                    Создать турнир
                </Button>
            </div>


        </div>
    );
};
