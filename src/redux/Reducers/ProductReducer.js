import { GET_PRODUCTS } from "../Constants/ProductConstant";


export const ProductReducers = (state = { products: [] }, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}
