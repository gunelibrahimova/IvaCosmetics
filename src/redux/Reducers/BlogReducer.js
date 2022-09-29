import { GET_BLOG } from "../Constants/BlogConstant"

export const BlogReducer = (state = { blogs: [] }, action) => {
    switch (action.type) {
        case GET_BLOG:
            return {
                ...state,
                blogs: action.payload
            }
        default:
            return state
    }
}