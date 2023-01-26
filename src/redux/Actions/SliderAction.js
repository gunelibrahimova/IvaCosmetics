import { BASE_URL } from "../../api/config"
import { GET_SLIDER } from "../Constants/SliderConstant"


export const getSliderAction = () => async (dispatch, getState) => {
    let blogs = await (await fetch(`${BASE_URL}Slider/getall
    `)).json()
    dispatch({
        type: GET_SLIDER,
        payload: blogs
    })
}