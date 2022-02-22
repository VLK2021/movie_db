// import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
//
// import {moviesService} from "../../services";
//
//
// export const getAllUpcoming = createAsyncThunk(
//     'upcomingSlice/getAllUpcoming',
//     async ({page}, {rejectWithValue}) =>{
//         try {
//             const upcomingF = await moviesService.getUpcoming(page)
//             return upcomingF
//         }catch (e){
//             return rejectWithValue(e.message);
//         }
//     });
//
// const initialState = {
//     upcomingArr: [],
//     currentPage: 1,
//     totalMoviesPage: 0,
//     error: null,
//     status: null,
// }
//
//
// const upcomingSlice = createSlice({
//     name: 'upcomingSlice',
//     initialState,
//     reducers:{},
//     extraReducers:{
//         [getAllUpcoming.pending]: (state, action) =>{
//             state.status = 'pending'
//             state.error = null
//         },
//         [getAllUpcoming.fulfilled]: (state, action) => {
//             state.status = 'fulfilled'
//             state.upcomingArr = action.payload
//             state.currentPage = action.payload.page
//             state.totalMoviesPage = action.payload.total_pages
//         },
//         [getAllUpcoming.rejected]: (state, action) => {
//             state.status = 'rejected'
//             state.error = action.payload
//         },
//     }
// });
//
// const upcomingReducer = upcomingSlice.reducer;
// export default upcomingReducer;