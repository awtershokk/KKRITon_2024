import React from 'react';
import { Image } from 'react-bootstrap';
import '../styles/image_card.css';
const ImageCard = ({ src, alt }) => {
    return (
        <div className="image-card">
            <Image src={src} alt={alt} fluid className="rounded" />
        </div>
    );
};

export default ImageCard;