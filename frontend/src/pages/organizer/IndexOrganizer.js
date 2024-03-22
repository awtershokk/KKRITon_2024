import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import ImageCard from "../../components/ImageCard";
import '../../styles/index_org.css';

import dota2Image from "../../img/dota2.jpg";
import cs2Image from "../../img/cs2.jpg";
import warfaceImage from "../../img/warface.jpg";

export default function IndexOrganizer() {
    return (
        <div className="page-container">
            <div className="page-background"></div>
            <Header />
            <div className="page-content">
                <h1 className="page-title">Выберите дисциплину, по которой будет проводиться турнир</h1>
                <div className="image-links-container">
                    <Link to="/organizer/create_tournament">
                        <div className="image-container">
                            <ImageCard src={dota2Image} alt="Игра для умных"/>
                        </div>
                    </Link>
                    <Link to="/organizer/create_tournament">
                        <div className="image-container">
                            <ImageCard src={cs2Image} alt="Игра для менее умных"/>
                        </div>
                    </Link>
                    <Link to="/organizer/create_tournament">
                        <div className="image-container">
                            <ImageCard src={warfaceImage} alt="Игра для менее умных"/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};