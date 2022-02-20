import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";


export const getAllSearch = createAsyncThunk(
    'searchSlice/getAllSearch',
    async ({word, page}, {rejectWithValue}) => {
        try {
            const searchF = await moviesService.getSearch(word, page)
            return searchF
        } catch (e) {
            return rejectWithValue(e.message)
        }
    });

const initialState = {
    searchArr: [],
    currentPage: 1,
    totalMoviesPage: 0,
    word: '',
    error: null,
    status: null,
}

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllSearch.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null
        },
        [getAllSearch.fulfilled]: (state, action) => {
            state.status = 'fulfilled...'
            state.searchArr = action.payload
            state.currentPage = action.payload.page
            state.word = action.payload.word
            state.totalMoviesPage = action.payload.total_pages
        },
        [getAllSearch.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
});

const searchReducer = searchSlice.reducer;
export default searchReducer;