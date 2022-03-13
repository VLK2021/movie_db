import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllNewMovies} from "../../store/slices/newMovies.slice";
import MovieCard from "../../components/MovieCard/MovieCard";
import {Pagination} from "../../Pagination/Pagination";
import './NewMoviesStyle.css';
import Carousel from "../../components/CarouselBox/CarouselBox";

const NewMovies = () => {

    const {newMoviesArr, status, error, currentPage, totalMoviesPage} = useSelector(store => store.newMoviesR);
    const {results} = newMoviesArr;

    const page = currentPage;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllNewMovies(page))
    }, []);


    return (
        <div className="newMovies">
            {error && <h1>{error}</h1>}

            <div className="newMovies-movies">
                {results && results.map(mov => <MovieCard key={mov.id} movie={mov}/>)}
            </div>

            <Pagination totalMoviesPage={totalMoviesPage} currentPage={currentPage} pageChange={getAllNewMovies}/>
        </div>
    );
};

export default NewMovies;