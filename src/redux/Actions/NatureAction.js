import { BASE_URL } from "../../api/config"
import { GET_NATURE } from "../Constants/NatureConstant"


export const getNatureAction = () => async (dispatch, getState) => {
    let blogs = await (await fetch(`${BASE_URL}Nature/getall
    `)).json()
    dispatch({
        type: GET_NATURE,
        payload: blogs
    })
}