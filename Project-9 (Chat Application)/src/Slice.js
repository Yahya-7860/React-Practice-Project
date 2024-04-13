import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    TextState: {
        isAuthenticated: false,
        // email: ''
    }
}
export const textSlice = createSlice({
    name: 'text',
    initialState,
    reducers: {
        UpdateIsAuthenticated: (state) => {
            state.TextState.isAuthenticated = !state.TextState.isAuthenticated
        },
        // setingEmail: (state, action) => {
        //     state.TextState.email = action.payload
        // }
    }
})

export const { UpdateIsAuthenticated } = textSlice.actions
export default textSlice.reducer