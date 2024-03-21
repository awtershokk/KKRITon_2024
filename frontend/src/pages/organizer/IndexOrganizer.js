import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import ImageCard from "../../components/ImageCard";

import dota2Image from "../../img/dota2.png";
import cs2Image from "../../img/cs2.jpeg";
import warfaceImage from "../../img/warface.jpg";

export default function IndexOrganizer() {
    return (

        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <Header />
            <div style={{
                position: 'absolute',
                top: 'calc(50% - 50px - 25px)',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                width: '100%'
            }}>
                <h1 style={{fontSize: '24px', marginBottom: '50px'}}>Выберите дисциплину, по которой будет проводиться
                    турнир</h1>
                <div style={{display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '30px'
                }}>
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
            </div>
        </div>

    );
};
