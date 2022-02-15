import {configureStore} from "@reduxjs/toolkit";

import moviesReducer from "./slices/movies.slice";

const store = configureStore({
    reducer: {
        movies: moviesReducer
    }
});

export default store;