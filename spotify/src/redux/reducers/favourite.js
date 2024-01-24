import { ADD_TO_FAVOURITE, REMOVE_FAV_COM } from "../action"



const initialState = {

    content: []

}

const favReducer = (state = initialState, action) => {
    switch (action.type) {
       case ADD_TO_FAVOURITE:
          if (state.content?.find((el) => el === action.payload)) {
             return state
          }
          else {
             return { ...state, content: [...state.content, action.payload] }
          };
       case REMOVE_FAV_COM:
          return { ...state, content: state.content?.filter(el => el !== action.payload) };
       default:
          return state;
    }
 };
 
 export default favReducer;