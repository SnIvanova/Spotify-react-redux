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
    <div className="py-3 trackHover" onClick={handleSelectSong}>
      <a href="#i" className="card-title trackHover px-3" style={{ color: "white" }}>
        {song.title}{" "}
        <Button
          onClick={handleToggleFavourite}
          size="sm"
          variant="outline-secondary"
          className="px-2 py-1 pb-2"
        >
          {isFavourite ? <FaHeart /> : <FaRegHeart />}
        </Button>
      </a>
      <small className="duration" style={{ color: "white" }}>
        {formattedDuration}
      </small>
    </div>
  );
};

export default Tracks;
