import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getAllGenresFilms} from "../../store/slices/genresFilms.slice";
import MovieCard from "../../components/MovieCard/MovieCard";
import {Pagination} from "../../Pagination/Pagination";
import './GenresFilmsListStyle.css';

const GenresFilmsList = () => {

    const page = useSelector(store => store.genresFilms.currentPage);
    const {genreFilmsArr, status, error, currentPage, totalMoviesPage} = useSelector(store => store.genresFilms);
    const {results} = genreFilmsArr;

    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenresFilms({id, page}))
    }, [id]);


    return (
        <div className="GenresFilmsList">
            {error && <h1>{error}</h1>}

            <div className="GenresFilmsList-list">
                {results && results.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>


            <Pagination totalMoviesPage={totalMoviesPage} currentPage={currentPage} pageChange={getAllGenresFilms}/>
        </div>
    );
};

export default GenresFilmsList;