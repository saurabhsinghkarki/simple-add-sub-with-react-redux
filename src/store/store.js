import {configureStore} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
 import {composeWithDevTools} from 'redux-devtools-extension';

const counterSlice = createSlice({
name :"counter",
initialState:{counter : 2490701},
reducers:{
decrementBy10k(state ,action){
state.counter = state.counter - action.payload
},
decrementBy5k(state,action){
state.counter = state.counter - action.payload
}
}
});


const store = configureStore({
   reducer:{
      counter : counterSlice.reducer,
   },composeWithDevTools
});

export const counterActions = counterSlice.actions;
export default store;