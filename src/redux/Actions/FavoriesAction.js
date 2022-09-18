import { BASE_URL } from "../../api/config"
import { ADD_TO_FAVORIES, GET_FAVORIES_ITEMS, REMOVE_ALL_FAVORIES } from "../Constants/FavoriesContants"



export const addToFavoriesAction = (id,quantity=1) => async (dispach, getState) => {
    const data = await (await fetch(`${BASE_URL}Product/getbyid/${id}`)).json()
    const product = {
        id: data.message.id,
        name: data.message.name,
        price: data.message.price,
        img: data.message.coverPhoto,
        quantity: quantity
      }
    dispach({
        type: ADD_TO_FAVORIES,
        payload: product
    })
    localStorage.setItem("favoriesItems",JSON.stringify(getState().favories.favoriesItems))

}

export const getFavoriesItems = () => async (dispach, getState) => {
    var data = JSON.parse(localStorage.getItem("favoriesItems"))
    dispach({
        type: GET_FAVORIES_ITEMS,
        payload: data
    })
}

export const removeFromFavories = (id) => (dispach,getState) => {
    dispach({
        type: REMOVE_ALL_FAVORIES,
        payload: id
    })
    localStorage.setItem("favoriesItems",JSON.stringify(getState().favories.favoriesItems))
}