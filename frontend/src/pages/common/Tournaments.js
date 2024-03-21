import React from 'react';
import TournamentCard from "../../components/TournamentCard";
import Header from '../../components/Header';

export default function Tournaments() {
    return (
        <div>
            <Header/>
            <h1>Список активных турниров</h1>

            <div className="row">
                <TournamentCard
                    title="Турнир по Dota 2"
                    content="Участники: Команда 1(гиперсылка), Команда 2(гиперсылка)"
                    buttonText="Участвовать"
                />
            </div>

            <div className="row">
                <TournamentCard
                    title="Турнир по CS2"
                    content="Участники: Команда 3(гиперсылка), Команда 4(гиперсылка)"
                    buttonText="Участвовать"
                />
            </div>

            <div className="row">
                <TournamentCard
                    title="Турнир по Warface"
                    content="Участники: Команда 5(гиперсылка), Команда 6(гиперсылка)"
                    buttonText="Участвовать"
                />
            </div>

        </div>


    );
};