import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    activeUsers: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
            return state;
        },
        setActiveUsers: (state, action) => {
            state.activeUsers = action.payload;
            return state;
        }
    }
})

export const { setUsername, setActiveUsers } = userSlice.actions;

export default userSlice.reducer;