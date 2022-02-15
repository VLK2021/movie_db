import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../services";



export const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async (page) => {
        const movies = await moviesService.getAllMovies(page)
        console.log(movies);
        return movies
    });

const initialState = {
    moviesArr: [],
    page: 1,
    status: null
};

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllMovies.pending]: (state, action) => {
            state.status = 'Loading...'

        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.moviesArr = action.payload
            state.page = action.payload.page

        },
        [getAllMovies.rejected]: (state, action) => {
            state.status = 'rejected'

        },
    }
});

const moviesReducer = moviesSlice.reducer;

export default moviesReducer;