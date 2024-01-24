import { ALBUM_HOME } from "../action"

const initialState = {
    content: []
}

const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALBUM_HOME:
            return {
                ...state,
                content: action.payload,
            }
        default:
            return state;
    }
}

export default albumReducer