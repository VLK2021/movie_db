import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import {
    getAllMovies,
    sortByVote_averageM,
    sortByPopularityM,
    sortByDateM,
    sortByOriginalTitleM
} from "../../store/slices";
import {Pagination} from "../../Pagination/Pagination";
import MovieCard from "../../components/MovieCard/MovieCard";
import CarouselBox from "../../components/CarouselBox/CarouselBox";
import "./MoviesList.css";


const MoviesList = () => {
    const {t} = useTranslation();
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

            <CarouselBox/>

            <div className="sort">
                <label className="sort-labelText">{t('movie-movieList-sortBy')}
                    <button onClick={() => dispatch(sortByVote_averageM(moviesArr.results))}>{t('movie-movieList-voteEverage')}</button>
                    <button onClick={() => dispatch(sortByPopularityM(moviesArr.results))}>{t('movie-movieList-popularity')}</button>
                    <button onClick={() => dispatch(sortByDateM(moviesArr.results))}>{t('movie-movieList-date')}</button>
                    <button onClick={() => dispatch(sortByOriginalTitleM(moviesArr.results))}>{t('movie-movieList-title')}</button>
                </label>
            </div>

            <div className="moviesList-movies">
                {results && results.map(mov => <MovieCard key={mov.id} movie={mov}/>)}
            </div>

            <Pagination totalMoviesPage={totalMoviesPage} currentPage={currentPage} pageChange={getAllMovies}/>
        </div>
    );
};

export default MoviesList;