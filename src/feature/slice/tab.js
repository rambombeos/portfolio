// tabSlice.js
import { createSlice } from '@reduxjs/toolkit';

const tabSlice = createSlice({
    name: 'tab',
    initialState: {
        data: {
            value: 0,
            dropdown: 2
        }
    },
    reducers: {
        fetchTab: (state, action) => {
            state.data.value = action.payload;
        },
        fetchDropdown: (state, action) => {
            state.data.dropdown = action.payload;
        },
    },
});

export const { fetchTab, fetchDropdown } = tabSlice.actions;
export default tabSlice.reducer;