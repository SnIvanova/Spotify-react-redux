export const GET_ROCK = "GET_ROCK";
export const GET_POP = "GET_POP";
export const GET_HIP_HOP = "GET_HIP_HOP";
export const GET_QUERY = "GET_QUERY";
export const GET_SEARCH = "GET_SEARCH";
export const RESET_SEARCH = "RESET_SEARCH";
export const GET_ALBUM = "GET_ALBUM";
export const GET_ARTIST = "GET_ARTIST";
export const GET_SELECTED = "GET_SELECTED";
export const GET_FAVOURITE = "GET_FAVOURITE";

export const getQueryAction = query => ({ type: GET_QUERY, payload: query });
export const resetSearchAction = () => ({ type: RESET_SEARCH, payload: [] });
export const getSelectedSong = song => ({ type: GET_SELECTED, payload: song });
export const getFavouriteAction = song => ({ type: GET_FAVOURITE, payload: song });

export const getSearchAction = url => {
  return async dispatch => {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        let songs = await resp.json();
        songs.data.sort(() => Math.random() - 0.5);

        dispatch({ type: GET_SEARCH, payload: songs.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getRockAction = url => {
  return async dispatch => {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        let songs = await resp.json();
        songs.data.sort(() => Math.random() - 0.5);

        dispatch({ type: GET_ROCK, payload: songs.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPopAction = url => {
  return async dispatch => {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        let songs = await resp.json();
        songs.data.sort(() => Math.random() - 0.5);

        dispatch({ type: GET_POP, payload: songs.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getHipHopAction = url => {
  return async dispatch => {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        let songs = await resp.json();
        songs.data.sort(() => Math.random() - 0.5);

        dispatch({ type: GET_HIP_HOP, payload: songs.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAlbumAction = url => {
  return async dispatch => {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        let data = await resp.json();

        dispatch({ type: GET_ALBUM, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getArtistAction = url => {
  return async dispatch => {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        let data = await resp.json();
        data.data.sort(() => Math.random() - 0.5);
        dispatch({ type: GET_ARTIST, payload: data.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
