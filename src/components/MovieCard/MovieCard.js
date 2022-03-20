import React from 'react';
import {NavLink} from "react-router-dom";

import {IMG_URL} from "../../constants";
import fotoFilm from '../../images/fotoFilm.jpg';
import './MovieCard.css'


const MovieCard = ({movie}) => {
    const {id, poster_path, original_title, vote_average, release_date, title} = movie;

    const setVoteClass = (vote) => {
        if (vote >= 8) {
            return 'green'
        } else if (vote >= 6) {
            return 'orange'
        } else {
            return 'red'
        }
    };


    return (
        <div className="movieCard">

            <NavLink to={id.toString()}>
                <div className="movieCard-img">
                    <img src={poster_path? IMG_URL + poster_path : fotoFilm} alt="poster"/>
                </div>

                <div>
                    <div className="movieCard-info">
                        <div className="movieCard-info-title">{original_title}</div>
                        <div className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</div>
                    </div>
                    <div className={`movieCard-info-year`}>{release_date}</div>
                </div>
            </NavLink>
        </div>
    );
};

export default MovieCard;