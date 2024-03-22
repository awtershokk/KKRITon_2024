import React from 'react';
import Header from '../../components/Header';
import { Button, Form, Container } from "react-bootstrap"; // Импортируем Container из react-bootstrap
import "../../styles/CreateTournament.css";

import OrderCard from "../../components/OrderCard"; // Импортируем файл стилей

export default function CreateOrder() {
    return (
        <div>
            <Header/>
                <OrderCard
                    name = "ККРИТ | DOTA 2"
                    id = "242422"
                    discipline = "DOTA 2"
                />

        </div>
    );
};
