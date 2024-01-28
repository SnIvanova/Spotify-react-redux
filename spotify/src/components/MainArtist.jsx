import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getArtistAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Canzone from "./Canzone";

const MainArtist = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const artistEndpoint = `https://striveschool-api.herokuapp.com/api/deezer/artist/${params.id}/top?limit=50`;

  useEffect(() => {
    dispatch(getArtistAction(artistEndpoint));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const artist = useSelector(state => state.artist.artist);

  return (
    <>
      <Row className="mb-3">
        <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <Link to="/">TRENDING</Link>
          <Link to="/">PODCAST</Link>
          <Link to="/">MOODS AND GENRES</Link>
          <Link to="/">NEW RELEASES</Link>
          <Link to="/">DISCOVER</Link>
        </Col>
      </Row>

      {artist.length > 0 && (
        <Row>
          <Col className="col-12 col-md-10 col-lg-10 mt-5">
            <h2 className="titleMain">{artist[0].artist.name}</h2>
            <div id="followers">{artist[0].rank} riproduzioni</div>

            <div className="d-flex justify-content-center" id="button-container">
              <Button className="btn btn-success me-2 mainButton " id="playButton">
                PLAY
              </Button>
              <Button className="btn btn-outline-light mainButton " id="followButton">
                FOLLOW
              </Button>
            </div>
          </Col>
        </Row>
      )}

      <Row className="mb-3">
        <Col className="col-10 offset-1 col-md-10 col-lg-10 p-0">
          <div className="mt-4 d-flex justify-content-start">
            <h2 className="text-white font-weight-bold">Tracks</h2>
          </div>
          <div className="pt-5 mb-5">
            {artist.length > 0 && (
              <Row id="apiLoaded">
                {artist.map(song => (
                  <Canzone key={song.id} song={song} />
                ))}
              </Row>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MainArtist;
