import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import ImageCard from "../../components/ImageCard";

import dota2Image from "../../img/dota2.png";
import cs2Image from "../../img/cs2.jpeg";
import warfaceImage from "../../img/warface.jpg";

export default function IndexOrganizer() {
    return (
        <div>
            <Header />
            <h1>Выберите дисциплину, по которой будет проводиться турнир</h1>
            <Link to="/organizer/create_tournament">
                <ImageCard src={dota2Image} alt="Игра для умных"/>
            </Link>

            <Link to="/organizer/create_tournament">
                <ImageCard src={cs2Image} alt="Игра для менее умных"/>
            </Link>
            
            <Link to="/organizer/create_tournament">
                <ImageCard src={warfaceImage} alt="Игра для менее умных"/>
            </Link>
        </div>
    );
};
