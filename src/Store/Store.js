import { combineReducers, createStore } from "redux";

import CartItemReducer from "../Reducer/CartItem";



export const store = createStore(CartItemReducer)