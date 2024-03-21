import React from 'react';

const TournamentCard = ({ title, content, buttonText }) => {
    return (
        <div className="col-sm-6">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <a href="#" className="btn btn-primary">{buttonText}</a>
                </div>
            </div>
        </div>
    );
};

export default TournamentCard;
