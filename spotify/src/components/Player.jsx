import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, ProgressBar } from 'react-bootstrap';
import { useSelector, useDispatch  } from 'react-redux';
import "bootstrap-icons/font/bootstrap-icons.css"
import { BiVolumeFull } from "react-icons/bi";

import { addToListenedSongs } from '../redux/actions/listenedSongsActions';

import shuffleIcon from '../playerbuttons/Shuffle.png';
import previousIcon from '../playerbuttons/Previous.png';
import playIcon from '../playerbuttons/Play.png';
import nextIcon from '../playerbuttons/Next.png';
import repeatIcon from '../playerbuttons/Repeat.png';
import pauseIcon from '../playerbuttons/Pause.png';

const Player = () => {
  const selectedSong = useSelector((state) => state.home.selectedSong);
  const [isPlaying, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const [listenedSongs, setListenedSongs] = useState([]);


  useEffect(() => {
    let interval;

    if (isPlaying && selectedSong) {
      interval = setInterval(() => {
        
        setProgress((prevProgress) => {
          const newProgress = prevProgress + (1 / selectedSong.duration) * 100; // Adjust based on song duration
          if (newProgress >= 100) {
            setPlaying(false);
            clearInterval(interval);
            return 0;
          }
          return newProgress;
        });
        setCurrentTime((prevTime) => prevTime + 1)}, 1000);
        setListenedSongs((prevListenedSongs) => [
          ...prevListenedSongs,
          {
            title: selectedSong.title,
            artist: selectedSong.artist.name,
          },]);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, selectedSong]);

  const dispatch = useDispatch();

  const handlePlayButtonClick = () => {
    setPlaying(!isPlaying);
    dispatch(addToListenedSongs({
      title: selectedSong.title,
      artist: selectedSong.artist.name,
    }));
  };

 
  const handleVolumeChange = (e) => {
    setVolume(Number(e.target.value));
  };

  const handleSeek = (e) => {
    const newPosition = (e.target.value / 100) * selectedSong.duration;
    setCurrentTime(newPosition);
    setProgress((newPosition / selectedSong.duration) * 100);
  };

  const controlIcons = [
    { icon: shuffleIcon, alt: 'shuffle' },
    { icon: previousIcon, alt: 'previous' },
    { icon: isPlaying ? pauseIcon : playIcon, alt: 'play' },
    { icon: nextIcon, alt: 'next' },
    { icon: repeatIcon, alt: 'repeat' },
  ];

  const renderSelectedSongInfo = () => {
    if (!selectedSong) return null;

    return (
      <Col
        xs={4}
        sm={6}
        md={4}
        lg={4}
        className="text-center text-lg-start d-flex py-auto align-items-center"
      >
        <div>
          <Image
            id="playerImg"
            src={selectedSong.album.cover_medium}
            width={70}
            height={70}
            alt="Song Image"
          />
        </div>
        <div className="ms-2">
          <p className="text-light fs-5 m-2">{selectedSong.title_short}</p>
          <p className="text-light fs-6 m-2">{selectedSong.artist.name}</p>
        </div>
      </Col>
    );
  };

  const renderControlIcon = (control, index) => (
    <Col key={index}>
      <Link to="#" onClick={control.alt === 'play' ? handlePlayButtonClick : () => {}}>
        <Image src={control.icon} alt={control.alt} />
      </Link>
    </Col>
  );

  const renderControlIcons = () => controlIcons.map(renderControlIcon);

  const renderVolumeControl = () => (
    <Col xs={12} lg={1} className="d-flex align-items-center m-2">
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange} 
      />
      <BiVolumeFull />
      
    </Col>
  );

  const renderDurationDisplay = () => (
    <Col xs={12} lg={1} className="d-flex align-items-center">
      {selectedSong && (
        <p className="text-light fs-6 m-2">{formatTime(selectedSong.duration)}</p>
      )}
    </Col>
  );

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={8} className="offset-lg-2">
          <Row className="row h-100 align-items-center">
            {renderSelectedSongInfo()}
            <Col xs={2} lg={1} className="d-flex align-items-center">
              <p className="text-light fs-6 m-2">{formatTime(currentTime)}</p>
            </Col>
            <Col xs={6} md={4} className="playerControls mt-1">
              <Row className="d-flex justify-content-center align-items-center">
                {renderControlIcons()}
              </Row>

              
              <Row className="justify-content-center mt-2">
                <Col xs={12} lg={11} className="playBar py-3 me-4 px-0">
                  <ProgressBar now={progress} role="progressbar" onClick={handleSeek}/>
                </Col>
              </Row>
            </Col>
    
              <Col>
                {renderDurationDisplay()} 
              </Col>
              <Col>
                {renderVolumeControl()}
                
              </Col>
      
          </Row>
        </Col>
       
      </Row> 
        
    </Container>
  );
};

export default Player;
