import { configureStore } from "@reduxjs/toolkit";
import userData from '../features/data.slice'
import cards from "../features/cards.slice";
import application from "../features/applicationSlice";

export const store = configureStore({
    reducer:{
        userData,
       application,
        cards
        

        
    }
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState> 
