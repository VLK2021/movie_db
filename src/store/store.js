import {configureStore} from "@reduxjs/toolkit";

import moviesReducer from "./slices/movies.slice";
import singleMovieReducer from "./slices/single.movie.slice";
import genresReducer from "./slices/genres.slice";
import genresFilmsReducer from "./slices/genresFilms.slice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        singleMovie: singleMovieReducer,
        genresStore: genresReducer,
        genresFilms: genresFilmsReducer,
    }
});

export default store;