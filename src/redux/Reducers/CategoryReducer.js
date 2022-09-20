import { CREATE_CATEGORY, GET_CATEGOIRES } from "../Constants/CategoryConstats"


export const CategoryReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case GET_CATEGOIRES:
            return {
                ...state,
                categories: action.payload
            }

        case CREATE_CATEGORY: 
        return{
            ...state,
            categories: action.payload
        }
        default:
            return state
    }
}