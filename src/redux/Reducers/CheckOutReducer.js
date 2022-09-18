import { CHECK_OUT } from "../Constants/CheckOutConstant";

export const addCheckOutReducer = (state ={checkOut: []},action) =>{
    switch (action.type) {
        case CHECK_OUT:
            return{
                ...state,
                state:action.payload
            }
        default:
            return state;
    }
}