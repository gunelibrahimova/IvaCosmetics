import { PRODUCT_PARAMETRS } from "../Constants/ParametrsConstants";

const initialState = {
    parametrs: {}
}


export const parametrsReducer = (state = initialState,action) =>{
    switch (action.type) {
        case PRODUCT_PARAMETRS:
        return{
            ...state,
            parametrs: action.payload
        }
        default:
            return state;
    }
}