import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";


export const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',

    async () => {
        const genress = await moviesService.getAllGenre()
        console.log(genress);
        return genress
    })

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
            state.status = 'pending'
        },
        [getAllGenres.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.genresArr = action.payload
        },
        [getAllGenres.rejected]: (state, action) => {
            state.status = 'rejected'
        }
    }
});

const genresReducer = genresSlice.reducer;
export default genresReducer;