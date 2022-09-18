import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { CartReducer } from "./Reducers/CartReducer";
import { addCheckOutReducer } from "./Reducers/CheckOutReducer";
import { FavoriesReducer } from "./Reducers/FavoriesReducer";
import { parametrsReducer } from "./Reducers/ParametrsReducer";
import { productReducer } from "./Reducers/ProductReducer";
import { UserReducer } from "./Reducers/UserReducer";

const {default: thunk} = require("redux-thunk")

const reducer = combineReducers({
    products: productReducer,
    user: UserReducer,
    cart: CartReducer,
    checkout: addCheckOutReducer,
    favories : FavoriesReducer,
    parametrs : parametrsReducer
})


const cartItemFromLocalStorage = localStorage.getItem("cartItems")
 ? JSON.parse(localStorage.getItem("cartItems")):[]

 const favoriesItemFromLocalStorage = localStorage.getItem("favoriesItems")
 ? JSON.parse(localStorage.getItem("favoriesItems")):[]

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo")) : []

const initialState ={
    products: [],
    user: {userInfo: userInfoFromLocalStorage},
    cart:{cartItems:cartItemFromLocalStorage},
    favories:{favoriesItems:favoriesItemFromLocalStorage},
    checkout: {checkOut: []},
    parametrs: {parametrs: []},
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
)


export default store;