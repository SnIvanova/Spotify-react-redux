import { GET_ALBUM, GET_SELECTED } from "../actions";

const initialState = {
  album: null,
  selectedSong: null
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUM:
      return {
        ...state,
        album: action.payload
      };
    case GET_SELECTED:
      return {
        ...state,
        selectedSong: action.payload
      };
    default:
      return state;
  }
};

export default albumReducer;
