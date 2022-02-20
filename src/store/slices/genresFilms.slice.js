import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";



export const getAllGenresFilms = createAsyncThunk(
    'genresFilmSlice/getAllGenresFilms',
    async ({id,page}, {rejectWithValue}) =>{
        try {
            const genresFilmsS = await moviesService.getAllGenreFilms(id, page)
            console.log(genresFilmsS);
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
    reducers:{},
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

const genresFilmsReducer = genresFilmSlice.reducer;
export default genresFilmsReducer;