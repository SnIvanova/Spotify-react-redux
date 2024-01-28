import { Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFavouriteAction, getSelectedSong } from "../redux/actions";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Song = ({ song }) => {
  const dispatch = useDispatch();
  const favourite = useSelector((state) => state.home.favourite);
  const isFavourite = favourite.some((favSong) => favSong.id === song.id);

  return (
    <>
      <Link to={"/"} onClick={() => dispatch(getSelectedSong(song))}>
        <Image fluid src={song.album.cover_medium} alt={song.album.title} />
      </Link>

      <div> 

        <Link className="text-decoration-none text-white fs-5" to={`/artist/${song.artist.id}`}>
          Artist: {song.artist.name}{" "}
          <br />
        </Link>
        <Link className="text-decoration-none text-white fs-6" to={`/album/${song.album.id}`}>
          Album: {song.album.title} 
          <br />
        </Link>
       
        <Button
          onClick={() => dispatch(getFavouriteAction(song))}
          size="sm"
          variant="outline-secondary"
          className="px-2 py-1 pb-2"
        >
          {isFavourite ? <FaHeart /> : <FaRegHeart />}
        </Button>
      </div>
    </>
  );
};

export default Song;
