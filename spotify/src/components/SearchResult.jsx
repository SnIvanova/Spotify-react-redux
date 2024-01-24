import { Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { setPlayer } from "../redux/action"
import Loader from "../components/Loader";

const SearchResult = () => {
  const result = useSelector((state) => state.search.search)
  const loader = useSelector((state) => state.loader)
  const dispatch = useDispatch()

  return loader ?(
    <Loader />
    ) : (
    <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
      {result.slice(0, 16).map((song) => (
        <Col
          className="text-center"
          key={song.id}
          onClick={() => dispatch(setPlayer(song))}
        >
          <img
            className="img-fluid"
            src={song.album.cover_medium}
            alt="track"
          />
          <p>
            {song.title_short}
            <br />
            {song.artist.name}
          </p>
        </Col>
       
      ))}
    </Row>
    
  )
}

export default SearchResult