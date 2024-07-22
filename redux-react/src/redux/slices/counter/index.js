import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    initialState: {
        value: 0
    } , 
    name: 'counter' , 
    reducers: {
        increment: (state) => {
            state.value += 1
        } , 
        decrement: (state) => {
                state.value -= 1
        } , 
        incrementByAmount: (state , action) => {
                console.log(action.payload)
                state.value += Number(action.payload.amount)
        }
    }
})
export const {decrement , increment , incrementByAmount} = counterSlice.actions
export default counterSlice.reducer