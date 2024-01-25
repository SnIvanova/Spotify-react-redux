import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbum, setPlayer } from "../redux/action";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const AlbumSong = ({ song, onClick }) => {
  const navigate = useNavigate();

  return (
    <Col className="text-center mb-5" key={song.id} onClick={onClick}>
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
  );
};

const AlbumHome = ({ category }) => {
  const { content: albumData, loading, error } = useSelector((state) => state.album);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [displayedSongs, setDisplayedSongs] = useState([]);

  useEffect(() => {
    dispatch(getAlbum(category));
  }, [dispatch, category]);

  const { data } = albumData || [];
  const numberOfDisplayedSongs = 4;

  const shuffleSongs = useMemo(() => (array) => {
    return array.sort(() => Math.random() - 0.5);
  }, []);

  const getCategoryData = useMemo(() => () => data.map((song) => ({ ...song, category })), [data, category]);

  const getUniqueSongs = useMemo(() => () => {
    const shuffledData = shuffleSongs(getCategoryData());
    return shuffledData.filter(
      (song) => !displayedSongs.some((displayedSong) => song?.id === displayedSong?.id)
    );
  }, [shuffleSongs, getCategoryData, displayedSongs]);

  const updateDisplayedSongs = () => {
    setDisplayedSongs([...displayedSongs, ...getUniqueSongs().slice(0, numberOfDisplayedSongs)]);
  };

  if (loading) {
    return <p className="loading-message">Loading...</p>;
  }

  if (error || !Array.isArray(data) || data.length === 0) {
    return <p className="error-message">Error fetching album data. Please try again later.</p>;
  }

  return (
    <Row
      className={`row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-2`}
      id={`${category ? category.toLowerCase() : "unknown"}Section`}
    >
      {getUniqueSongs().slice(0, numberOfDisplayedSongs).map((song) => (
        <AlbumSong key={song.id} song={song} onClick={() => handleSongClick(song)} />
      ))}
    </Row>
  );

  function handleSongClick(song) {
    dispatch(setPlayer(song));
    updateDisplayedSongs();
  }
};

export default AlbumHome;
