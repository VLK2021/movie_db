import {configureStore} from "@reduxjs/toolkit";

import moviesReducer from "./slices/movies.slice";
import singleMovieReducer from "./slices/single.movie.slice";
import genresReducer from "./slices/genres.slice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        singleMovie: singleMovieReducer,
        genresStore: genresReducer,
    }
});

export default store;