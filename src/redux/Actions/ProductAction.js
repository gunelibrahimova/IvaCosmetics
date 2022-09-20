import { BASE_URL } from './../../api/config';
import { GET_PRODUCTS } from '../Constants/ProductConstant';



export const getProductsAction  = () => async (dispatch,getState) =>{
    let products = await (await fetch(`${BASE_URL}Product/productlist`)).json()
    dispatch({
        type: GET_PRODUCTS,
        payload: products.message
    })

}
