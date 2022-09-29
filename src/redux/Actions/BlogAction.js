import { BASE_URL } from "../../api/config"
import { GET_BLOG } from "../Constants/BlogConstant"


export const getBlogAction = () => async (dispatch, getState) => {
    let blogs = await (await fetch(`${BASE_URL}Blog/getall
    `)).json()
    dispatch({
        type: GET_BLOG,
        payload: blogs
    })
}