import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import MovieCard from "../../components/MovieCard/MovieCard";
import {
    getAllSearch,
    sortByVote_average,
    sortByPopularity,
    sortByDateM,
    sortByOriginalTitleM
} from "../../store/slices/search.slice";
import {Pagination} from "../../Pagination/Pagination";
import './SearchFilmsStyle.css';


const SearchFilms = () => {

    const {searchArr, status, error, currentPage, totalMoviesPage} = useSelector(store => store.searchFilm);
    const {results} = searchArr;

    const dispatch = useDispatch();

    return (
        <div className="searchFilms">
            {error && <h1>{error}</h1>}

            <div className="sort">
                <label className="sort-labelText">Sort By:
                    <button onClick={() => dispatch(sortByVote_average(searchArr.results))}>VoteEverage</button>
                    <button onClick={() => dispatch(sortByPopularity(searchArr.results))}>Popularity</button>
                    <button onClick={() => dispatch(sortByDateM(searchArr.results))}>Date</button>
                    <button onClick={() => dispatch(sortByOriginalTitleM(searchArr.results))}>Title</button>
                </label>
            </div>

            <div className="searchFilms-films">
                {
                    results && results.map(movie => <MovieCard key={movie.id} movie={movie}/>)
                }
            </div>

            <Pagination totalMoviesPage={totalMoviesPage} currentPage={currentPage} pageChange={getAllSearch}/>
        </div>
    )
};

export default SearchFilms;