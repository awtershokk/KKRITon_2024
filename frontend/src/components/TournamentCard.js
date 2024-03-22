import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from '../styles/TournamentCard.module.css';

const TournamentCard = ({ title, discipline, status, date_start, date_end, teams, organizate }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState("");

    const handleApply = () => {
        setShowModal(false);
        // Логика после отправки заявки
    };

    const handleTeamSelect = (team) => {
        setSelectedTeam(team);
    };

    return (
        <div className="col-sm-6">
            <div className={styles.card}>
                <div className={styles.cardBody}>

                    <h5 className={styles.cardTitle}>{title}</h5>
                    <h5 className={styles.cardTitle}>{discipline}</h5>
                    <h7 className={styles.cardTitle}>Организатор: {organizate}</h7>
                    <h7 className={styles.status}>{status}</h7>
                    <h6 className={styles.dateRange}>{date_start} - {date_end}</h6>
                    <p className={styles.cardText}>{teams}</p>
                    <Button className={styles.btnPrimary} onClick={() => setShowModal(true)}>Принять участие</Button>
                </div>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Выберите команду</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Button variant="outline-primary" onClick={() => handleTeamSelect("МОСКОВСКИЕ БАРБОСЫ")}>МОСКОВСКИЕ БАРБОСЫ</Button>{' '}
                        <Button variant="outline-primary" onClick={() => handleTeamSelect("CTRL STUDIO")}>CTRL STUDIO</Button>{' '}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Отмена</Button>
                    <Button variant="primary" onClick={handleApply}>Подать заявку</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={selectedTeam !== ""} onHide={() => setSelectedTeam("")}>
                <Modal.Header closeButton>
                    <Modal.Title>Ваша заявка на участие</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Ваша заявка на участие в турнире {title} под командой {selectedTeam} на рассмотрении.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setSelectedTeam("")}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default TournamentCard;
