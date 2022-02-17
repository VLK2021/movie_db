import React from 'react';
import {IMG_URL} from "../../constants";
import './MovieCard.css'

const MovieCard = ({
                       movie: {
                           backdrop_path,
                           genre_ids,
                           original_title,
                           overview,
                           popularity,
                           poster_path,
                           release_date,
                           vote_average,
                           vote_count
                       }
                   }) => {
    return (
        <div className="movieCard">

            <div className="movieCard-img">
                <img src={IMG_URL + poster_path} alt=""/>
            </div>
            <div className="movieCard-info">
                <div className="movieCard-info-title">{original_title}</div>
            </div>

        </div>
    );
};

export default MovieCard;