import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavouriteAction, getSelectedSong } from "../redux/actions";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Button } from "react-bootstrap";

const Tracks = ({ song }) => {
  const dispatch = useDispatch();
  const favourite = useSelector((state) => state.home.favourite);
  const isFavourite = favourite.some((favSong) => favSong.id === song.id);

  const handleSelectSong = () => dispatch(getSelectedSong(song));
  const handleToggleFavourite = () => dispatch(getFavouriteAction(song));

  const formattedDuration = `${Math.floor(song.duration / 60)}:${String(song.duration % 60).padStart(2, "0")}`;

  return (
    <div className="track-container">
      <div className="track-info" onClick={handleSelectSong}>
        <span className="track-title text-white">{song.title}</span>
        <Button
          onClick={handleToggleFavourite}
          size="sm"
          variant={isFavourite ? "danger" : "outline-secondary"}
          className="favorite-button m-1"
        >
          {isFavourite ? <FaHeart /> : <FaRegHeart />}
        </Button>
        <div className="track-duration">{formattedDuration}</div>
      </div>
      <div className="album-image">
        <img src={song.album.cover_medium} alt={song.title} />
      </div>
    </div>
  );
};

export default Tracks;
