import React from 'react';
import styles from '../styles/TeamCard.module.css';
const TeamCard = ({ title, players }) => {
    return (
        <div className="col-sm-6">
            <div className={styles.card}>
                <div className={styles.titleArea}>
                    <h4 className={styles.cardTitle}>{title}</h4>
                </div>
                <div className={styles.playersArea}>
                    {players.map((player, index) => (
                        <h6 className={styles.cardTitle} key={index}>Игрок {index + 1}: {player}</h6>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamCard;