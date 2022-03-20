import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";


export const getAllGenresFilms = createAsyncThunk(
    'genresFilmSlice/getAllGenresFilms',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const genresFilmsS = await moviesService.getAllGenreFilms(id, page)
            return genresFilmsS
        } catch (e) {
            return rejectWithValue(e.message)
        }
    });

const initialState = {
    genreFilmsArr: [],
    status: null,
    error: null,
    currentPage: 1,
    totalMoviesPage: 0,
}

const genresFilmSlice = createSlice({
    name: 'genresFilmSlice',
    initialState,
    reducers: {
        sortByVote_averageG: (state, action) => {
            state.genreFilmsArr.results = state.genreFilmsArr.results.slice().sort((a, b) => b.vote_average - a.vote_average);
        },
        sortByPopularityG: (state, action) => {
            state.genreFilmsArr.results = state.genreFilmsArr.results.slice().sort((a, b) => b.popularity - a.popularity);
        },
        sortByDateG: (state, action) => {
            state.genreFilmsArr.results = state.genreFilmsArr.results.slice().sort((a, b) => b.release_date > a.release_date ? 1 : -1);
        },
        sortByOriginalTitleG: (state, action) => {
            state.genreFilmsArr.results = state.genreFilmsArr.results.slice().sort((a, b) => a.original_title > b.original_title ? 1 : -1);
        },
    },
    extraReducers: {
        [getAllGenresFilms.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null
        },
        [getAllGenresFilms.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.genreFilmsArr = action.payload
            state.currentPage = action.payload.page
            state.totalMoviesPage = action.payload.total_pages
        },
        [getAllGenresFilms.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
});

export const {sortByVote_averageG, sortByDateG, sortByOriginalTitleG, sortByPopularityG} = genresFilmSlice.actions;
const genresFilmsReducer = genresFilmSlice.reducer;
export default genresFilmsReducer;