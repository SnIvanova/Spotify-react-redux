import { SET_PLAYER } from "../action"

const initialState = {
    selected: null
}

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLAYER:
            return {
                ...state,
                selected: action.payload,
            }
        default:
            return state
    }
}

export default playerReducer