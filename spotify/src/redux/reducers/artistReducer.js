import { GET_ARTIST, GET_SELECTED } from "../actions";

const initialState = {
  artist: [],
  selectedSong: null
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTIST:
      return {
        ...state,
        artist: action.payload
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

export default artistReducer;
