import React, { useState } from 'react';
import Header from '../../components/Header';
import { Button, Form, Container, Modal } from "react-bootstrap";
import "../../styles/CreateTournament.css";

export default function IndexOrganizer() {
    const [showModal, setShowModal] = useState(false);
    const [tournamentName, setTournamentName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [selectedDiscipline, setSelectedDiscipline] = useState("Dota 2");
    const [selectedLevel, setSelectedLevel] = useState("Районный");

    const handleCreateTournament = (event) => {
        event.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        // Сбросить значения формы
        setTournamentName("");
        setStartDate("");
        setEndDate("");
        setSelectedDiscipline("Dota 2");
        setSelectedLevel("Районный");
    };

    return (
        <div>
            <Header />
            <Container className="custom-container mt-5">
                <h1>Создание турнира</h1>

                <Form onSubmit={handleCreateTournament}>
                    <Form.Group className="mb-3">
                        <Form.Label>Название турнира</Form.Label>
                        <Form.Control type="text" name="tournamentName" value={tournamentName} onChange={(e) => setTournamentName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Дисциплина</Form.Label>
                        <Form.Select className="form-control mt-1" value={selectedDiscipline} onChange={(e) => setSelectedDiscipline(e.target.value)}>
                            <option value="Dota 2">Dota 2</option>
                            <option value="CS 2">CS 2</option>
                            <option value="Warface">Warface</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Уровень турнира</Form.Label>
                        <Form.Select className="form-control mt-1" value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
                            <option value="Районный">Районный</option>
                            <option value="Городской">Городской</option>
                            <option value="Краевой">Краевой</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Дата начала</Form.Label>
                        <Form.Control type="date" name="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Дата окончания</Form.Label>
                        <Form.Control type="date" name="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button type="submit" variant="primary">
                            Создать турнир
                        </Button>
                    </div>
                </Form>

                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Успешное создание турнира</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Создать турнир "{tournamentName}" по дисциплине "{selectedDiscipline}" уровня "{selectedLevel}" с даты {startDate} до {endDate}?.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Отмена
                        </Button>
                        <Button variant="primary" onClick={handleCloseModal}>
                            Подтвердить
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
    );
};