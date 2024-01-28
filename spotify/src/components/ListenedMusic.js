import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Row, Container, Spinner, Card } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Player from './Player';

const ListenedMusic = () => {
  const recentlyListenedSongs = useSelector((state) => state.listenedSongs.listenedSongs);
  const isLoading = useSelector((state) => state.listenedSongs.loading);
  //const favouriteSongs = useSelector((state) => state.home.favourite);

  const renderSongCard = (song) => (
    <Col key={song.id} className="mb-3">
      <Card className="h-100">
        <div
          className="card-image"
          style={{
            backgroundImage: song.photo ? `url(${song.photo})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '200px',
            borderRadius: '8px',
          }}
        />
        <Card.Body>
          <Card.Title>{song.title}</Card.Title>
          <Card.Text>{song.artist}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );

  const renderListenedSongs = () => {
    if (isLoading) {
      return (
        <div className="text-center">
          <Spinner animation="border" role="status" variant="primary" />
          <p>Loading...</p>
        </div>
      );
    }

    if (recentlyListenedSongs.length === 0) {
      return <p>No songs listened recently.</p>;
    }

    return (
      <Row xs={1} md={2} lg={3} className="g-4">
        {recentlyListenedSongs.map((song) => renderSongCard(song))}
      </Row>
    );
  };

  return (
    <Container fluid>
      <Row className="mb-3">
        <Col className="col-12 mainLinks d-flex justify-content-space-evenly">
          <Link to="/">TRENDING</Link>
          <Link to="/">PODCAST</Link>
          <Link to="/">MOODS AND GENRES</Link>
          <Link to="/">NEW RELEASES</Link>
          <Link to="/">DISCOVER</Link>
        </Col>
      </Row>

      <Row md={4} lg={10} className="">
        <Col xs={2}>
          <Sidebar />
        </Col>

        <Col xs={12} md={9} className="mainPage">
          <div className="recently-listened-container">
            <h3 className="m-4 text-white">Recently Listened</h3>
            {renderListenedSongs()}
          </div>
        </Col>

{/*         <Col>
          <h2>Your Favorites</h2>
          <Row xs={1} md={2} lg={3} className="g-4">
            {favouriteSongs.map(renderSongCard)}
          </Row>
        </Col> */}
      </Row>

      <Player />
    </Container>
  );
};

export default ListenedMusic;
