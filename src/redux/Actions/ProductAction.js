import { BASE_URL } from "../../api/config"
import { GET_PRODUCTS } from "../Constants/ProductConstant"


export const getProductsAction = () => async (dispach, getState) => {
    if (!Object.keys(getState().products).length) {
        const data = await (await fetch(`${BASE_URL}Product/getall`)).json()
        dispach({
            type: GET_PRODUCTS,
            payload: data.message
        })
    }
}