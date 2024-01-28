import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Tracks from "./Track";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumAction } from "../redux/actions";

const MainAlbum = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const albumEndpoint = `https://striveschool-api.herokuapp.com/api/deezer/album/${params.id}`;

  useEffect(() => {
    dispatch(getAlbumAction(albumEndpoint));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const album = useSelector(state => state.album.album);

  return (
    <>
      <Row className="mb-3">
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <Link to="/">TRENDING</Link>
          <Link to="/">PODCAST</Link>
          <Link to="/">MOODS AND GENRES</Link>
          <Link to="/">NEW RELEASES</Link>
          <Link to="/">DISCOVER</Link>
        </Col>
      </Row>
      <Row>
        <Col md={3} className="pt-5 text-center" id="img-container">
          {album && (
            <>
              <img src={album.cover} className="card-img img-fluid" alt="Album" />
              <div className="mt-4 text-center">
                <p className="album-title">{album.title}</p>
              </div>
              <div className="text-center">
                <p className="artist-name">{album.artist.name}</p>
              </div>
              <div className="mt-4 text-center">
                <button id="btnPlay" className="btn btn-success" type="button">
                  Play
                </button>
              </div>
            </>
          )}
        </Col>
        <Col md={8} className="p-5">
          <Row>
            <Col md={10} className="mb-5" id="trackList">
              {album && (
                <>
                  {album.tracks.data.map(song => (
                    <Tracks key={song.id} song={song} />
                  ))}
                </>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default MainAlbum;
