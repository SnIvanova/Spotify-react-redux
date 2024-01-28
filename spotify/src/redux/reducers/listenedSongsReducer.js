import { ADD_TO_LISTENED_SONGS } from '../actions/listenedSongsActions';

const initialState = {
  listenedSongs: [],
};

const listenedSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LISTENED_SONGS:
      //const { title, artist, photo } = action.payload;
      console.log('New state:', state);
      console.log('Listened songs:', state.listenedSongs);
      return {
        ...state,
        listenedSongs: [...state.listenedSongs, action.payload],
      };
    default:
      return state;
  }
};

export default listenedSongsReducer;