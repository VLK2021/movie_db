import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import './MovieGenresStyle.css';
import {getAllGenres} from "../../store/slices/genres.slice";
import GenreCard from "../../components/GenreCard/GenreCard";


const MovieGenres = () => {

    const {genresArr} = useSelector(store => store.genresStore);
    const {genres} = genresArr;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    }, []);


    return (
        <div className="MovieGenres">
            <div className='MovieGenres-genres'>
                {genres && genres.map(value => <GenreCard key={value.id} genres={value}/>)}
            </div>

            <div className="MovieGenres-outlet"><Outlet/></div>
        </div>
    );
};

export default MovieGenres;