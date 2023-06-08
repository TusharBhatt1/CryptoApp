import { configureStore, createSlice } from "@reduxjs/toolkit";


let watchListSlice= createSlice({
    initialState:[],
    name:"watching",
    reducers:{
        addToWatchList(state,action)
        {
            return[...state,action.payload]
        },
        removeItem(state,action)
        {
            return (state.filter((item)=>item.uuid !== action.payload))
        }
    }
})

export let myStore= configureStore({
    reducer:{
        "watchList":watchListSlice.reducer
    }
    
    })

export const {addToWatchList}=watchListSlice.actions
export const {removeItem}=watchListSlice.actions
