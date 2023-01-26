import { GET_SLIDER } from "../Constants/SliderConstant"

export const SliderReducer = (state = { sliders: [] }, action) => {
    switch (action.type) {
        case GET_SLIDER:
            return {
                ...state,
                sliders: action.payload
            }
        default:
            return state
    }
}