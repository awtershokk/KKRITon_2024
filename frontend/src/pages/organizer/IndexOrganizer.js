import React from 'react';
import OrganizerHeader from '../../components/OrganizerHeader';
import ImageCard from "../../components/ImageCard";
import dota2Image from "../../img/dota2.png";
import cs2Image from "../../img/cs2.jpeg"
import warfaceImage from "../../img/warface.jpg"

export default function IndexOrganizer() {
    return (
        <div>
            <OrganizerHeader />
            <ImageCard src={dota2Image} alt="Игра для умных"/>
            <ImageCard src={cs2Image} alt="Игра для менее умных"/>
            <ImageCard src={warfaceImage} alt="Игра для менее умных"/>

        </div>
    );
};
