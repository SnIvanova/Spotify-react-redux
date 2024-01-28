import React from 'react';
import { useSelector } from 'react-redux';
import { Link} from "react-router-dom";
import { Button, Col, Row, Container } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Player from "./Player";


const ListenedMusic = () => {
  const listenedSongs = useSelector((state) => state.listenedSongs.listenedSongs);
//console.log(listenedSongs);
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
      <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>

        <Col xs={12} md={9} className="offset-md-3 mainPage">
        <div>
      <h3>Recently Listened</h3>
      <ul>
        {listenedSongs.map((song, index) => (
          <li key={index}>
            {song.title} by {song.artist}
          </li>
        ))}
      </ul>
    </div>
        </Col>
      </Row>
      <Player />
    </Container>

    </>
  );
  
};

export default ListenedMusic;
