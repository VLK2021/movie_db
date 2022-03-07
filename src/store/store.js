import {configureStore} from "@reduxjs/toolkit";

import moviesReducer from "./slices/movies.slice";
import singleMovieReducer from "./slices/single.movie.slice";
import genresReducer from "./slices/genres.slice";
import genresFilmsReducer from "./slices/genresFilms.slice";
import searchReducer from "./slices/search.slice";
import newMoviesReducer from "./slices/newMovies.slice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        singleMovie: singleMovieReducer,
        genresStore: genresReducer,
        genresFilms: genresFilmsReducer,
        searchFilm: searchReducer,
        newMoviesR: newMoviesReducer,
    }
});

export default store;