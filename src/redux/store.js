import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { CartReducer } from "./Reducers/CartReducer";
import { CategoryReducer } from "./Reducers/CategoryReducer";
import { addCheckOutReducer } from "./Reducers/CheckOutReducer";
import { FaqReducer } from "./Reducers/FaqReducer";
import { FavoriesReducer } from "./Reducers/FavoriesReducer";
import { parametrsReducer } from "./Reducers/ParametrsReducer";
import { ProductReducers } from "./Reducers/ProductReducer";
import { UserReducer } from "./Reducers/UserReducer";
import {SizeReducer} from "./Reducers/SizeReducer"
import { BlogReducer } from "./Reducers/BlogReducer";

const {default: thunk} = require("redux-thunk")

const reducer = combineReducers({
    products : ProductReducers,
    user: UserReducer,
    cart: CartReducer,
    checkout: addCheckOutReducer,
    favories : FavoriesReducer,
    parametrs : parametrsReducer, 
    faq : FaqReducer,
    category : CategoryReducer,
    size: SizeReducer,
    blog : BlogReducer
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
    faq: [],
    category : [],
    size: [],
    blog : []
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
)


export default store;