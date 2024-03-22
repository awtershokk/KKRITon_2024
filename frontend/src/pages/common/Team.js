import React, { useState } from "react";
import Header from "../../components/Header";
import TeamCard from "../../components/TeamCard";
import TeamModal from "../../components/TeamModal";
import styles from '../../styles/TeamCard.module.css'; // Importing CSS module

export default function Team() {
    const [showModal, setShowModal] = useState(false);
    const [teams, setTeams] = useState([]);

    const handleToggleModal = () => {
        setShowModal(!showModal);
    };

    const handleCreateTeam = (team) => {
        const nonEmptyPlayers = team.players.filter(player => player.trim() !== ''); // Filter out empty player fields
        setTeams([...teams, { ...team, players: nonEmptyPlayers }]);
        setShowModal(false);
    };

    return (
        <div>
            <Header />

            <div className="container-tournaments">
                <h1 className="heading-tournaments">Список команд</h1>

                <div className={styles.buttonContainer}>
                    <button className={styles.createTeamButton} onClick={handleToggleModal}>
                        Создать команду
                    </button>
                </div>

                <div className={styles.teamCardsContainer}>
                    {teams.map((team, index) => (
                        <div key={index} style={{ marginBottom: '20px' }}>
                            <TeamCard {...team} />
                        </div>
                    ))}
                </div>

                <TeamModal show={showModal} onHide={handleToggleModal} onCreateTeam={handleCreateTeam} />
            </div>
        </div>
    );
}