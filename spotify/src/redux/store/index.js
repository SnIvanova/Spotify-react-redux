import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homeReducer from "../reducers/homeReducer";
import albumReducer from "../reducers/albumReducer";
import artistReducer from "../reducers/artistReducer";
import listenedSongsReducer from '../reducers/listenedSongsReducer';

const rootReducer = combineReducers({
  home: homeReducer,
  album: albumReducer,
  artist: artistReducer,
  listenedSongs: listenedSongsReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
