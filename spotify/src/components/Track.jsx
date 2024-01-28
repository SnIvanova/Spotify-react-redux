import { useDispatch, useSelector } from "react-redux";
import { getFavouriteAction, getSelectedSong } from "../redux/actions";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Button } from "react-bootstrap";

const Tracks = ({ song }) => {
  const dispatch = useDispatch();
  const favourite = useSelector(state => state.home.favourite);
  const isFavourite = favourite.some(favSong => favSong.id === song.id);
  return (
    <>
      <div className="py-3 trackHover" onClick={() => dispatch(getSelectedSong(song))}>
        <a href="#i" className="card-title trackHover px-3" style={{ color: "white" }}>
          {song.title}{" "}
          <span>
            <Button
              onClick={() => dispatch(getFavouriteAction(song))}
              size="sm"
              variant="outline-secondary"
              className="px-2 py-1 pb-2"
            >
              {isFavourite ? <FaHeart /> : <FaRegHeart />}
            </Button>
          </span>
        </a>
        <small className="duration" style={{ color: "white" }}>
          {Math.floor(song.duration / 60)}:{(song.duration % 60).toString().padStart(2, "0")}
        </small>
      </div>
    </>
  );
};

export default Tracks;
