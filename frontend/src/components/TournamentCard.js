import React from 'react';
import styles from '../styles/TournamentCard.module.css';

const TournamentCard = ({ title, discipline, status, date_start, date_end, teams, id }) => {
    return (
        <div className="col-sm-6">
            <div className={styles.card}>
                <div className={styles.cardBody}>
                    <div>
                        <h5 className={styles.cardTitle}>{title}</h5>
                        <h5 className={styles.cardTitle}>ID: {id}</h5>
                    </div>
                    <h5 className={styles.cardTitle}>{discipline}</h5>
                    <h7 className={styles.status}>{status}</h7>
                    <h6 className={styles.dateRange}>{date_start} - {date_end}</h6>
                    <p className={styles.cardText}>{teams}</p>
                    <a href="#" className={styles.btnPrimary}>Принять участие</a>
                </div>
            </div>
        </div>
    );
};

export default TournamentCard;