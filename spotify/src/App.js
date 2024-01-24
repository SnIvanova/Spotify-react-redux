import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import './assets/style.css'
import MyNav from './components/Nav';
import MainMusic from './components/MainMusic';
import PlayBar from './components/PlayBar';
import AlbumHome from './components/AlbumHome'; 
 import ArtistPage from './components/Artist'; 


function App() {
  return (
    <>
    <Container>
    <MyNav />
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<MainMusic />} />
        <Route path="/album/:artistName" element={<AlbumHome />} />
         <Route path="/artist/:id" element={<ArtistPage />} /> 
    </Routes>
  </BrowserRouter>
  <PlayBar />
  </Container>
  </>
);
}

export default App;