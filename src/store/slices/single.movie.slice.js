import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";


export const getSingleMovie = createAsyncThunk(
    'singleMovieSlice/getSingleMovie',

    async ({id}, {rejectWithValue}) => {
        try {
            const movie = await moviesService.getSingleMovie(id);
            return movie
        } catch (e) {
            return rejectWithValue(e.message);
        }
    });

export const getTrailer = createAsyncThunk(
    'singleMovieSlice/getTrailer',

    async ({id}, {rejectWithValue}) => {
        try {
            const trailer = await moviesService.getTrailer(id);
            return trailer
        } catch (e) {
            return rejectWithValue(e.message);
        }
    });


const initialState = {
    trailerArr: [],
    singleMovieObj: {},
    status: null,
    error: null,
}

const singleMovieSlice = createSlice({
    name: 'singleMovieSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getSingleMovie.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null;
        },
        [getSingleMovie.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.singleMovieObj = action.payload
        },
        [getSingleMovie.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },


        [getTrailer.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null;
        },
        [getTrailer.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.trailerArr = action.payload
        },
        [getTrailer.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
});

const singleMovieReducer = singleMovieSlice.reducer;
export default singleMovieReducer;