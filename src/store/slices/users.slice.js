import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    users: [
        {id: 1, login: 'admin', password: '1111'},
    ]
};


const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        addUser: ((state, action) => {
            state.users.push({
                id: new Date().getTime(),
                login: action.payload.login,
                password: action.payload.password
            })
        })
    }
});
const usersReducer = usersSlice.reducer;
export default usersReducer;
export const {addUser} = usersSlice.actions;
