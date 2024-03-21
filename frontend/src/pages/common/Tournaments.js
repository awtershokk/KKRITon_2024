import React from 'react';
import TournamentCard from "../../components/TournamentCard";
import Header from '../../components/Header';

export default function Tournaments() {
    return (
        <div>
            <Header/>
            <div className="container">

                <h1 className="mt-2">Список активных турниров</h1>

                <div className="row mt-2">
                    <div className="col-md-6">
                        <TournamentCard
                            title="ККРИТ|Dota 2"
                            discipline="Dota 2"
                            status="Запланирован"
                            date_start="19.08"
                            date_end="30.08"
                            teams="Участники: Команда 1, Команда 2"
                            buttonText="Участвовать"
                        />
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-md-6">
                        <TournamentCard
                            title="ККРИТ|WARFACE"
                            discipline="WARFACE"
                            status="Запланирован"
                            date_start="18.08"
                            date_end="29.08"
                            teams="Участники: Команда 1, Команда 2"
                            buttonText="Участвовать"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};
