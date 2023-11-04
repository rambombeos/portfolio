import { createSlice } from '@reduxjs/toolkit'

export const archivedSlice = createSlice({
    name: 'archived',
    initialState: {
        cases: [],
    },
    reducers: {
        fetchCaseArchived: (state, action) => {
            state.cases = action.payload
        },
    },
})

export const {
    fetchCaseArchived,
} = archivedSlice.actions

export default archivedSlice.reducer