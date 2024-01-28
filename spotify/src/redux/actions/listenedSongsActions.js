export const ADD_TO_LISTENED_SONGS = 'ADD_TO_LISTENED_SONGS';

export const addToListenedSongs = (song) => ({
  type: ADD_TO_LISTENED_SONGS,
  payload: song,
});