import {
  GET_FAVOURITE,
  GET_HIP_HOP,
  GET_POP,
  GET_QUERY,
  GET_ROCK,
  GET_SEARCH,
  GET_SELECTED,
  RESET_SEARCH
} from "../actions";

const initialState = {
  rock: [],
  pop: [],
  hiphop: [],
  query: "",
  search: [],
  selectedSong: null,
  favourite: []
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCK:
      return {
        ...state,
        rock: action.payload
      };
    case GET_POP:
      return {
        ...state,
        pop: action.payload
      };
    case GET_HIP_HOP:
      return {
        ...state,
        hiphop: action.payload
      };
    case GET_QUERY:
      return {
        ...state,
        query: action.payload
      };
    case GET_SEARCH:
      return {
        ...state,
        search: action.payload
      };
    case RESET_SEARCH:
      return {
        ...state,
        search: action.payload
      };
    case GET_SELECTED:
      return {
        ...state,
        selectedSong: action.payload
      };
    case GET_FAVOURITE:
      return {
        ...state,
        favourite: [...state.favourite, action.payload]
      };
    default:
      return state;
  }
};

export default homeReducer;
