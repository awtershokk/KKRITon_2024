import React, { useState,  useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const TeamModal = ({ show, onHide, onCreateTeam }) => {
    const [teamName, setTeamName] = useState('');
    const [players, setPlayers] = useState(['']);

    useEffect(() => {
        // Reset state when the modal is closed
        if (!show) {
            setTeamName('');
            setPlayers(['']);
        }
    }, [show]);

    const handleAddPlayer = () => {
        if (players.length < 10) {
            setPlayers([...players, '']);
        }
    };

    const handleChangePlayer = (index, value) => {
        const updatedPlayers = [...players];
        updatedPlayers[index] = value;
        setPlayers(updatedPlayers);
    };

    const handleCreateTeam = () => {
        const newTeam = {
            title: teamName,
            players: players.filter(player => player.trim() !== '')
        };
        onCreateTeam(newTeam);
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Создание команды</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="teamName">
                        <Form.Label>Имя команды</Form.Label>
                        <Form.Control type="text" placeholder="Введите имя команды" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
                    </Form.Group>
                    {players.map((player, index) => (
                        <Form.Group controlId={`player${index}`} key={index}>
                            <Form.Label>Игрок {index + 1}</Form.Label>
                            <Form.Control type="text" placeholder={`Введите имя игрока ${index + 1}`} value={player} onChange={(e) => handleChangePlayer(index, e.target.value)} />
                        </Form.Group>
                    ))}
                    {players.length < 5 && <Button variant="secondary" onClick={handleAddPlayer} style={{ marginTop: '10px' }}>Добавить игрока</Button>}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleCreateTeam}>Создать</Button>
            </Modal.Footer>
        </Modal>
    );
};


export default TeamModal;