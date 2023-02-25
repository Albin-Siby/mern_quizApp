import { createSlice } from '@reduxjs/toolkit'

export const resultReducer = createSlice({
    name: 'result',
    initialState: {
        userId: null,
        result: []
    },
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload
        },
        pushResultAction : (state, action) => {
            state.result.push(action.payload)
        },
        updateResultAction : (state, action) => {
            const { trace, checked } = action.payload  //get the current trace and check/selected value
            state.result.fill(checked, trace, trace + 1) //fill(updated value,prev trace, latest trace/end value) change the array from start to end with modified values and return a new array
        },
        resetResultAction : () => {
            return {
                userId: null,
                result: []
            }
        }
    }
})

export const { setUserId, pushResultAction, resetResultAction, updateResultAction } = resultReducer.actions

export default resultReducer.reducer