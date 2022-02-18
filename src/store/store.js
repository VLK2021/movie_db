import {configureStore} from "@reduxjs/toolkit";

import moviesReducer from "./slices/movies.slice";
import singleMovieReducer from "./slices/single.movie.slice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        singleMovie: singleMovieReducer
    }
});

export default store;