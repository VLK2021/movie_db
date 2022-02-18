import React from 'react';
import {NavLink} from "react-router-dom";

import {IMG_URL} from "../../constants";
import './MovieCard.css'


const MovieCard = ({movie}) => {

    const {id, poster_path, original_title, vote_average} = movie;


    return (
        <div className="movieCard">
            <NavLink to={id.toString()}>

                <div className="movieCard-img">
                    <img src={IMG_URL + poster_path} alt=""/>
                </div>

                <div className="movieCard-info">
                    <div className="movieCard-info-title">{original_title}</div>
                    <div>{vote_average}</div>
                </div>
            </NavLink>
        </div>
    );
};

export default MovieCard;