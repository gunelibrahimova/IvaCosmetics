import { BASE_URL } from "../../api/config"
import { CREATE_CATEGORY, GET_CATEGOIRES } from "../Constants/CategoryConstats"

export const getCategoryAction = () => async (dispatch, getState) => {
    let categories = await (await fetch(`${BASE_URL}category/getall`)).json()
    dispatch({
        type: GET_CATEGOIRES,
        payload: categories
    })
}

export const createCategoryAction = (categoryName,photourl,ispopular) => async (dispatch, getState) => {
    let data = await fetch(`${BASE_URL}category/add`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: categoryName,
            photoURL: photourl,
            isPopular: ispopular
        })
    }).then(x=> x.json())
    dispatch({
        type: CREATE_CATEGORY,
        payload: data
    })
}

