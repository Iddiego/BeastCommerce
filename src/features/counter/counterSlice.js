import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:0
}

export const counterslice = createSlice({
    name:"counter",
    initialState: initialState,
    reducers: {
        increment: (state)=>{
            state.value = state.value + 1

        }
    }
})

export const {increment} = counterslice.actions
export default counterslice.reducer