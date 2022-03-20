import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";


export const getAllNewMovies = createAsyncThunk(
    'newMoviesSlice/getAllNewMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const newMovies = await moviesService.getAllNewMovies(page)
            return newMovies
        } catch (e) {
            return rejectWithValue(e.message);
        }
    });

const initialState = {
    newMoviesArr: [],
    status: null,
    error: null,
    currentPage: 1,
    totalMoviesPage: 0,
}

const newMoviesSlice = createSlice({
    name: 'newMoviesSlice',
    initialState,
    reducers: {
        sortByVote_averageN: (state, action) => {
            state.newMoviesArr.results = state.newMoviesArr.results.slice().sort((a, b) => b.vote_average - a.vote_average);
        },
        sortByPopularityN: (state, action) => {
            state.newMoviesArr.results = state.newMoviesArr.results.slice().sort((a, b) => b.popularity - a.popularity);
        },
        sortByDateN: (state, action) => {
            state.newMoviesArr.results = state.newMoviesArr.results.slice().sort((a, b) => b.release_date > a.release_date ? 1 : -1);
        },
        sortByOriginalTitleN: (state, action) => {
            state.newMoviesArr.results = state.newMoviesArr.results.slice().sort((a, b) => a.original_title > b.original_title ? 1 : -1);
        },
    },
    extraReducers: {
        [getAllNewMovies.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null
        },
        [getAllNewMovies.fulfilled]: (state, action) => {
            state.status = "fulfilled"
            state.newMoviesArr = action.payload
            state.currentPage = action.payload.totalMoviesPage
            state.totalMoviesPage = action.payload.total_pages
        },
        [getAllNewMovies.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
});

export const {sortByVote_averageN, sortByPopularityN, sortByDateN, sortByOriginalTitleN} = newMoviesSlice.actions;
const newMoviesReducer = newMoviesSlice.reducer;
export default newMoviesReducer;