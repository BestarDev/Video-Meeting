import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    localstream: null
}

export const callSlice = createSlice({
    name: 'call',
    initialState,
    reducers: {
        setLocalstream: (state, action) => {
            return {
                ...state, localstream: action.payload
            }
        }
    }
})

export const { setLocalstream } = callSlice.actions;

export default callSlice.reducer;