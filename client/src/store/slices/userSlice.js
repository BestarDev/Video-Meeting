import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload.username
            return state;
        }
    }
})

export const { setUsername } = userSlice.actions;

export default userSlice.reducer;