import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Home from "./components/Home";
import Album from "./components/Album";
import Artist from "./components/Artist";
import ListenedMusic from './components/ListenedMusic';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album/:id" element={<Album />} />
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/your-library" element={<ListenedMusic/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
