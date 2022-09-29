import { BASE_URL } from "../../api/config"
import { PRODUCT_SIZE } from "../Constants/SizeConstants"

export const getSizeAction = () => async (dispatch, getState) => {
    let sizes = await (await fetch(`${BASE_URL}ProductSize/getall`)).json()
    dispatch({
        type: PRODUCT_SIZE,
        payload: sizes
    })
}