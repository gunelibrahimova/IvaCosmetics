import { BASE_URL } from "../../api/config"
import { ADD_TO_CART, GET_CART_ITEMS, REMOVE_ALL_CART } from './../Constants/CartConstants';

export const addToCartAction = (id,quantity=1) => async (dispach, getState) => {
    const data = await (await fetch(`${BASE_URL}Product/getbyid/${id}`)).json()
    const product = {
        id: data.message.id,
        name: data.message.name,
        price: data.message.price,
        img: data.message.coverPhoto,
        // img: (`${FILE_PATH}${data.message.coverPhoto}`),
        quantity: quantity
      }
    dispach({
        type: ADD_TO_CART,
        payload: product
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))

}

export const getCartItems = () => async (dispach, getState) => {
    var data = JSON.parse(localStorage.getItem("cartItems"))
    dispach({
        type: GET_CART_ITEMS,
        payload: data
    })
}

export const removeAllCartAction = () => async (dispach,getState) => {
    localStorage.removeItem("cartItems")
    dispach({
        type:REMOVE_ALL_CART,
        
    })
}
