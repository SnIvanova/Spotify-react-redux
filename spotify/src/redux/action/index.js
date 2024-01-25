
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE"
export const REMOVE_FAV_COM = "REMOVE_FAV_COM"
export const SEARCH_ARTIST = 'SEARCH_ARTIST'
export const ALBUM_HOME = 'ALBUM_HOME'
export const SET_PLAYER = 'SET_PLAYER'


export const getSearch = (searchValue) => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
                searchValue,
                {
                    headers: {
                        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
                        "X-RapidAPI-Key":
                            "aa2890f940msh2306372c5602516p1f7ae5jsnd0d7be2f4c19",
                    },
                }
            )
            if (res.ok) {
                const data = await res.json()
                console.log(data)
                dispatch({
                    type: SEARCH_ARTIST,
                    payload: data.data,

                })
            } else {
                throw new Error("ops ricerca non trovata!")
            }
        } catch (error) {
            console.log("errore", error)
        }
    }
}

export const getAlbum = (artistName, category) => {
    return async (dispatch) => {
      try {
        const res = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            artistName,
          {
            headers: {
              "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
              "X-RapidAPI-Key":
                "aa2890f940msh2306372c5602516p1f7ae5jsnd0d7be2f4c19",
            },
          }
        );
        if (res.ok) {
          const data = await res.json();
          dispatch({
            type: ALBUM_HOME,
            payload: { data: data.data, category: category }, 
          });
        } else {
          throw new Error("Ops ricerca non trovata!");
        }
      } catch (error) {
        console.log("Errore", error);
      }
    };
  };

export const setPlayer = (selectedAlbum) => (
    {
        type: SET_PLAYER,
        payload: selectedAlbum,
    }
)

export const addFavouriteAction = (title) => {
    return {
      type: ADD_TO_FAVOURITE,
      payload: title,
    };
  };
    
