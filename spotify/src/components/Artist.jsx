import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import  TopLinks  from "./TopLinks";
import { getAlbum } from "../redux/action"

const ArtistPage = ({ artistName }) => {
  const dispatch = useDispatch();
  const artist = useSelector((state) => state.artist);
  const albums = useSelector((state) => state.album.content);

  useEffect(() => {
    const fetchData = () => {
        try {
             dispatch(getAlbum(artistName));
        } catch (error) {
            console.error('Error fetching album:', error);
            
        }
    };

    fetchData();
}, [dispatch, artistName]);


    if (!artist) {
        return <p>Loading...</p>;
    }

  return (
    <>

      <Col className="col-12 col-md-9 offset-md-3 mainPage">
        <TopLinks />

        <Row>
          <Col xs={12} md={10} lg={10} className="mt-5">
            <h2 className="titleMain">{artist.name || "Artist Name Loading..."}</h2>
            <div id="followers">{artist.nb_fan} followers</div>
            <div className="d-flex justify-content-center" id="button-container">
              <Button className="btn btn-success mr-2 mainButton d-inline" id="playButton">
                PLAY
              </Button>
              <Button className="btn btn-outline-light mainButton d-inline" id="followButton">
                FOLLOW
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={10} md={10} lg={10} className="offset-1 p-0">
            <div className="mt-4 d-flex justify-content-start">
              <h2 className="text-white font-weight-bold">Tracks</h2>
            </div>
            <div className="pt-5 mb-5">
              <Row id="apiLoaded">
                {albums.map((song) => (
                  <div key={song.id} className="col-sm-auto col-md-auto text-center mb-5">
                    <Link to={`/album/${song.album.id}`}>
                      <img className="img-fluid" src={song.album.cover_medium} alt="1" />
                    </Link>
                    <p>
                      <Link to="#">
                        Track: "
                        {
                          song.title.length < 16 ? `${song.title}` : `${song.title.substring(0, 16)}...`
                        }
                        "
                      </Link>
                      <br />
                      <Link to={`/album/${song.album.id}`}>
                        Album: "
                        {
                          song.album.title.length < 16 ? `${song.album.title}` : `${song.album.title.substring(0, 16)}...`
                        }
                        "
                      </Link>
                    </p>
                  </div>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default ArtistPage;
