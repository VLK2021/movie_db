import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../services";


export const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const movies = await moviesService.getAllMovies(page)
            return movies
        } catch (e) {
            return rejectWithValue(e.message);
        }
    });

const initialState = {
    moviesArr: [],
    status: null,
    error: null,
    currentPage: 1,
    totalMoviesPage: 0,
};

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllMovies.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null
        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.moviesArr = action.payload
            state.currentPage = action.payload.page
            state.totalMoviesPage = action.payload.total_pages
        },
        [getAllMovies.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
});

const moviesReducer = moviesSlice.reducer;
export default moviesReducer;