import { PRODUCT_SIZE } from "../Constants/SizeConstants";

export const SizeReducer = (state = { sizes: [] }, action) => {
    switch (action.type) {
        case PRODUCT_SIZE:
            return {
                ...state,
                sizes: action.payload
            }
        default:
            return state
    }
}