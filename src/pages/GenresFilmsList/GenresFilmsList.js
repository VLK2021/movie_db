import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

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
                <label className="sort-labelText">Sort By:
                    <button onClick={() => dispatch(sortByVote_averageG(genreFilmsArr.results))}>VoteEverage</button>
                    <button onClick={() => dispatch(sortByPopularityG(genreFilmsArr.results))}>Popularity</button>
                    <button onClick={() => dispatch(sortByDateG(genreFilmsArr.results))}>Date</button>
                    <button onClick={() => dispatch(sortByOriginalTitleG(genreFilmsArr.results))}>Title</button>
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