
import { createSlice } from '@reduxjs/toolkit'
 const counterSlice = createSlice({
    name:'counter',
    initialState:{
        user:{},
    },

    reducers:{
        getData:(state, action)=>{
            state.user= action.payload;
        }
        // increment:(state)=>{
        //     state.count += 1;
        // },
        // decrement:(state)=>{
        //     state.count -= 1
        // },
    }
 });

// export const {increment, decrement}= counterSlice.actions
export const {getData}= counterSlice.actions
export default counterSlice.reducer;
