import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies} from "../../store/slices";
import {Pagination} from "../../Pagination/Pagination";
import "./MoviesList.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import {Outlet} from "react-router-dom";

const MoviesList = () => {


    const {moviesArr, status, error, currentPage, totalMoviesPage} = useSelector(store => store.movies);
    const {results} = moviesArr;
    const page = 1;
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllMovies(page))
    }, []);

    return (
        <div className="moviesList">
            {error && <h1>{error}</h1>}

            <div className="moviesList-movies">
                {results && results.map(mov => <MovieCard key={mov.id} movie={mov}/>)}
            </div>
            <Outlet/>
            <Pagination totalMoviesPage={totalMoviesPage} currentPage={currentPage} pageChange={getAllMovies}/>


            <Outlet/>
        </div>
    );
};

export default MoviesList;