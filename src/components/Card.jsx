import React from 'react';
import { link } from '../images';


const Card = ({ heading, text, url, image}) => {
  return (
    <div className="card">
        <div className="image-container">
        <img src={image} alt="Card Image" className="image-left" />

      </div>
      <div className="text-container custom-text-container">
        <h3 className="heading bold">{heading}</h3>
          <p className="card-text">{text}</p>
        </div>

     
        <a href={url} target="_blank" >
          <img src={link} alt="link" className="url-icon"/>
        </a>
      </div>
   
  );
};

export default Card;
