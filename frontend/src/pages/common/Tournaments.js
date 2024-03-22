import React from 'react';
import TournamentCard from "../../components/TournamentCard";
import Header from '../../components/Header';
import '../../styles/Tournaments.css';
export default function Tournaments() {
    return (
        <div>
            <Header/>

            <div className="container-tournaments">

                <h1 className="heading-tournaments">Список активных турниров</h1>

                <div className="row">
                    <div className="col-md-6">
                        <TournamentCard
                            title="Краевой чемпионат по dota 2"
                            discipline="DOTA 2"
                            organizate= "ККРИТ"
                            status="Запланирован"
                            date_start="19.08"
                            date_end="30.08"
                            teams="Участники:"
                            buttonText="Участвовать"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <TournamentCard
                            title="Региональный чемпионат по warface"
                            discipline="WARFACE"
                            status="Запланирован"
                            organizate= "ККРИТ"
                            date_start="18.08"
                            date_end="29.08"
                            teams="Участники:"
                            buttonText="Участвовать"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};