import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies, sortByVote_averageM, sortByPopularityM} from "../../store/slices";
import {Pagination} from "../../Pagination/Pagination";
import MovieCard from "../../components/MovieCard/MovieCard";
import CarouselBox from "../../components/CarouselBox/CarouselBox";
import "./MoviesList.css";



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

            <CarouselBox/>

            <div className="sort">
                <label className="sort-labelText">Sort By:
                    <button onClick={() => dispatch(sortByVote_averageM(moviesArr.results))}>VoteEverage</button>
                    <button onClick={() => dispatch(sortByPopularityM(moviesArr.results))}>Popularity</button>
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