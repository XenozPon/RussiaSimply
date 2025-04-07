import React from 'react';
import back from './../images/back.png';
import sprite from './../images/sprite.png';
const Banner = () => {
    return (
        <div className="banner-wrapper">

            <h1>Россия Просто</h1>
            <img id="back" src={back} alt=""/>
            <img id="sprite" src={sprite} alt=""/><img id="sprite" src={sprite} alt=""/><img id="sprite" src={sprite} alt=""/><img id="sprite" src={sprite} alt=""/><img id="sprite" src={sprite} alt=""/><img id="sprite" src={sprite} alt=""/>
        </div>
    );
};

export default Banner;