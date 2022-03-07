import React from 'react';
import {NavLink} from "react-router-dom";

import './GenreCardStyle.css';

const GenreCard = ({genres}) => {
    const {id, name} = genres;

    return (
        <div className="genreCard">
            <NavLink to={id.toString()}>
                <h2 className="genreCard-name">{name}</h2>
            </NavLink>
        </div>
    );
};

export default GenreCard;