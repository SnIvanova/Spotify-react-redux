import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbum, setPlayer } from "../redux/action";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const AlbumHome = ({ category, seed }) => {
  const { content: albumData } = useSelector((state) => state.album);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAlbum(category));
  }, [dispatch, category]);

  const { data } = albumData || {};

  if (!data || !Array.isArray(data)) {
    return (
      <p className="error-message">
        Invalid album data. Please check your connection or try again later.
      </p>
    );
  }

  // Function to shuffle array 
  const shuffleArray = (array, seed) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i  + 1));
  
      [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
    }
    return shuffledArray;
  };
  
  const categoryData = data.map((song) => ({ ...song, category }));
  
  const shuffledData = shuffleArray(categoryData);
  

  return (
    <Row
      className={`row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-2`}
      id={`${category ? category.toLowerCase() : "unknown"}Section`}
    >
      {shuffledData.slice(0, 4).map((song) => (
        <Col
          className="text-center mb-5"
          key={song.id}
          onClick={() => dispatch(setPlayer(song))}
        >
          <img
            className="img-fluid"
            src={song.album.cover_medium}
            alt="track"
            onClick={() => navigate(`/artist/${song.artist.id}`)}
          />
          <p className="">
            {song.title_short}
            <br />
            {song.artist.name}
          </p>
        </Col>
      ))}
    </Row>
  );
};

export default AlbumHome;
