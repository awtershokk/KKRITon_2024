import React from 'react';
import '../styles/TournamentCard.css';
const TournamentCard = ({ title, discipline, status, date_start, date_end, teams }) => {
    return (
        <div className="col-sm-6">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h5 className="card-title">{discipline}</h5>
                    <h7 className="card-title status">{status}</h7>
                    <h6 className="card-title date-range">{date_start} - {date_end}</h6>
                    <p className="card-text">{teams}</p>
                    <a href="#" className="btn btn-primary">Принять участие</a>
                </div>
            </div>
        </div>
    );
};

export default TournamentCard;
