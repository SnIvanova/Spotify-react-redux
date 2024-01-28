import { Button, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getFavouriteAction, getSelectedSong } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Canzone = ({ song }) => {
  const dispatch = useDispatch();
  const favourite = useSelector(state => state.home.favourite);
  const isFavourite = favourite.some(favSong => favSong.id === song.id);
  return (
    <Col className="col-sm-auto col-md-auto text-center mb-5">
      <a href="#i" onClick={() => dispatch(getSelectedSong(song))}>
        <Image fluid src={song.album.cover_medium} alt={song.title} />
      </a>
      <p>
        <a className="text-decoration-none" href="#i">
          Track: {song.title} <br />
        </a>
        <Link className="text-decoration-none" to={`/album/${song.album.id}`}>
          Album: {song.album.title}
        </Link>
        <Button
          onClick={() => dispatch(getFavouriteAction(song))}
          size="sm"
          variant="outline-secondary"
          className="px-2 py-1 pb-2"
        >
          {isFavourite ? <FaHeart /> : <FaRegHeart />}
        </Button>
      </p>
    </Col>
  );
};

export default Canzone;
