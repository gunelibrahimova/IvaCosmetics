import { ADD_TO_FAVORIES, GET_FAVORIES_ITEMS, REMOVE_ALL_FAVORIES } from "../Constants/FavoriesContants";


export const FavoriesReducer = (state = { favoriesItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_FAVORIES:
            let item = action.payload;
            let myCart = state.favoriesItems.find(c => c.id === item.id);
            if (myCart) {
                return {
                    ...state,
                    favoriesItems: state.favoriesItems.map((a) => a.id === myCart.id ? item : a)
                }
            } else {
                return {
                    ...state,
                    favoriesItems: [...state.favoriesItems, item]
                }
            }

        case GET_FAVORIES_ITEMS:
            return {
                ...state,
                favories: action.payload
            }
        case REMOVE_ALL_FAVORIES:
            
            return {
                ...state,
                favoriesItems: state.favoriesItems.filter((x) => x.product !== action.payload)
            }
        default:
            return state
    }
}