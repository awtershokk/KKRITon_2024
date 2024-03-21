import React from 'react';

import '../styles/image_card.css';

const ImageCard = ({ src, alt}) => {
    return <img src={src} alt={alt} className="image-card"/>;
};

export default ImageCard;
