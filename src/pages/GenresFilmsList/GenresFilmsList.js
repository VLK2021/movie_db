import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import {
    getAllGenresFilms,
    sortByVote_averageG,
    sortByPopularityG,
    sortByDateG,
    sortByOriginalTitleG
} from "../../store/slices/genresFilms.slice";
import MovieCard from "../../components/MovieCard/MovieCard";
import {Pagination} from "../../Pagination/Pagination";
import './GenresFilmsListStyle.css';


const GenresFilmsList = () => {
    const {t} = useTranslation();
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

            <div className="sort">
                <label className="sort-labelText">{t('movie-movieList-sortBy')}
                    <button onClick={() => dispatch(sortByVote_averageG(genreFilmsArr.results))}>{t('movie-movieList-voteEverage')}</button>
                    <button onClick={() => dispatch(sortByPopularityG(genreFilmsArr.results))}>{t('movie-movieList-popularity')}</button>
                    <button onClick={() => dispatch(sortByDateG(genreFilmsArr.results))}>{t('movie-movieList-date')}</button>
                    <button onClick={() => dispatch(sortByOriginalTitleG(genreFilmsArr.results))}>{t('movie-movieList-title')}</button>
                </label>
            </div>

            <div className="GenresFilmsList-list">
                {results && results.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>

            <Pagination totalMoviesPage={totalMoviesPage} currentPage={currentPage} pageChange={getAllGenresFilms}/>
        </div>
    );
};

export default GenresFilmsList;