import React from 'react';
import {useSelector} from "react-redux";

import MovieCard from "../../components/MovieCard/MovieCard";
import {Pagination} from "../../Pagination/Pagination";
import {getAllSearch} from "../../store/slices/search.slice";
import './SearchFilmsStyle.css';


const SearchFilms = () => {

 const {searchArr, status, error, currentPage, totalMoviesPage}= useSelector(store=>store.searchFilm);

 const{results} = searchArr;

    return (
        <div className="searchFilms">
            {error && <h1>{error}</h1>}

            <div className="searchFilms-films">
                {
                    results && results.map(movie => <MovieCard key={movie.id} movie={movie}/>)
                }
            </div>

            {/*<Pagination totalMoviesPage={totalMoviesPage} currentPage={currentPage} pageChange={getAllSearch}/>*/}
        </div>
    );
};

export default SearchFilms;