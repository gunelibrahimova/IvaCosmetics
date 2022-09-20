import { BASE_URL } from "../../api/config"
import { FAQ_QUESTION } from "../Constants/FaqConstants"

export const getFaqAction = () => async (dispatch, getState) => {
    let faq = await (await fetch(`${BASE_URL}Faq/getall`)).json()
    dispatch({
        type: FAQ_QUESTION,
        payload: faq
    })
}