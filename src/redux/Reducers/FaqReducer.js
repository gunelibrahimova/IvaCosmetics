import { FAQ_QUESTION } from "../Constants/FaqConstants"


const initialState = {
    faq: {}
}

export const FaqReducer = (state = initialState,action) =>{
    switch (action.type) {
        case FAQ_QUESTION:
            return{
                ...state, 
                faq : action.payload
            }
    
        default:
            return state;
    }
}