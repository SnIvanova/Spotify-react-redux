import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import searchReducer from "../reducers/search";
import albumReducer from "../reducers/album";
import playerReducer from "../reducers/player";
import favReducer from "../reducers/favourite";

const persistConfig = {
    key: "root",
    storage,
    transforms: [
      encryptTransform({
        secretKey: process.env.REACT_APP_PERSISTSECRET || "fallback-secret-key"
      })
    ]
  };

const rootReducer = combineReducers({
    search: searchReducer,
    album: albumReducer,
    player: playerReducer,
    fav: favReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const persistor = persistStore(store);