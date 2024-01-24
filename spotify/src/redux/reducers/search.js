import { SEARCH_ARTIST } from "../action"

const initialState = {
    search: [],
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_ARTIST:
            return {
                ...state,
                search: action.payload,
            }
        default:
            return state
    }
}

export default searchReducer