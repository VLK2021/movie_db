import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    user: {},
};

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        addUser: ((state, action) => {
            state.user = action.payload
        }),

        addSubscriptionS: ((state, action) => {
            state.user.subscriptions.push(action.payload)
        }),
    }
});

const usersReducer = usersSlice.reducer;
export default usersReducer;
export const {addUser, addSubscriptionS} = usersSlice.actions;
