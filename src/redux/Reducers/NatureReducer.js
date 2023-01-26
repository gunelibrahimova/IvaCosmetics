import { GET_NATURE } from "../Constants/NatureConstant"

export const NatureReducer = (state = { natures: [] }, action) => {
    switch (action.type) {
        case GET_NATURE:
            return {
                ...state,
                natures: action.payload
            }
        default:
            return state
    }
}