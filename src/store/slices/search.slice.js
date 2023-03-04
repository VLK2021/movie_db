import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";


export const getAllSearch = createAsyncThunk(
    'searchSlice/getAllSearch',
    async ({word, page}, {rejectWithValue}) => {
        try {
            const searchF = await moviesService.getSearch(word, page);
            return searchF
        } catch (e) {
            return rejectWithValue(e.message)
        }
    });

const initialState = {
    searchArr: [],
    currentPage: 1,
    totalMoviesPage: 0,
    error: null,
    status: null,
}

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        sortByVote_average: (state, action) => {
            state.searchArr.results = state.searchArr.results.slice().sort((a, b) => b.vote_average - a.vote_average);
        },
        sortByPopularity: (state, action) => {
            state.searchArr.results = state.searchArr.results.slice().sort((a, b) => b.popularity - a.popularity);
        },
        sortByDateM: (state, action) => {
            state.searchArr.results = state.searchArr.results.slice().sort((a, b) => b.release_date > a.release_date ? 1 : -1);
        },
        sortByOriginalTitleM: (state, action) => {
            state.searchArr.results = state.searchArr.results.slice().sort((a, b) => a.original_title > b.original_title ? 1 : -1);
        },
    },
    extraReducers: {
        [getAllSearch.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null
        },
        [getAllSearch.fulfilled]: (state, action) => {
            state.status = 'fulfilled...'
            state.searchArr = action.payload
            state.currentPage = action.payload.page
            state.totalMoviesPage = action.payload.total_pages
        },
        [getAllSearch.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
});

export const {sortByVote_average, sortByPopularity, sortByDateM, sortByOriginalTitleM} = searchSlice.actions;
const searchReducer = searchSlice.reducer;
export default searchReducer;

