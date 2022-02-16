import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies} from "../../store/slices";
import {Pagination} from "../../components/Pagination/Pagination";

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
            <div className="moviesList-movies">
                {results && results.map(mov => <div key={mov.id}>{mov.original_title}</div>)}

                <Pagination totalMoviesPage={totalMoviesPage} currentPage={currentPage} pageChange={getAllMovies}/>
            </div>

            <div>

            </div>
        </div>
    );
};

export default MoviesList;