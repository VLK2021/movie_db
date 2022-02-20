import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";


export const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
        const genress = await moviesService.getAllGenre()
        return genress
        } catch (e) {
            return rejectWithValue(e.message);
        }
    });

const initialState = {
    genresArr: [],
    status: null,
    error: null,
}

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllGenres.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null
        },
        [getAllGenres.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.genresArr = action.payload
        },
        [getAllGenres.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
});

const genresReducer = genresSlice.reducer;
export default genresReducer;