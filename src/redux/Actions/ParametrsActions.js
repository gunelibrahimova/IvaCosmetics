import { BASE_URL } from "../../api/config"
import { PRODUCT_PARAMETRS } from "../Constants/ParametrsConstants"



export const getParametrsAction = () => async (dispach, getState) => {
    if (!Object.keys(getState().parametrs).length) {
        const data = await (await fetch(`${BASE_URL}Paramaters/getall`)).json()
        dispach({
            type: PRODUCT_PARAMETRS,
            payload: data.message
        })
    }
}