import { Col, Container, Row } from "react-bootstrap"
import shuffle from "../assets/playerbuttons/Shuffle.png"
import repeat from "../assets/playerbuttons/Repeat.png"
import play from "../assets/playerbuttons/Play.png"
import prev from "../assets/playerbuttons/Previous.png"
import next from "../assets/playerbuttons/Next.png"
import { useDispatch, useSelector } from "react-redux"
import { Heart, HeartFill } from "react-bootstrap-icons"
import { ADD_TO_FAVOURITE,  REMOVE_FAV_COM } from "../redux/action";

const PlayBar = () => {
  const player = useSelector((state) => state.player.selected)
  const favourites = useSelector((state) => state.fav.content || []);
  const dispatch = useDispatch()

  return (
    <Container fluid className="fixed-bottom bg-container pt-1 ">
      <Row className="h-100">
        <Col className="offset-lg-2 ">
          <Row className="row h-100 align-items-center">
            <Col xs={4} className="d-flex text-white align-items-center">
              <div>
                <img
                  src={player?.album.cover_medium}
                  alt=""
                  style={{ width: "70px", height: "70px" }}
                />
              </div>
              <div className="ms-2">
                <p style={{ lineHeight: "1em" }}>{player?.artist.name}</p>
                <p style={{ lineHeight: "1em" }}>{player?.title_short}</p>
              </div>
                <span style={{ color: "white" }}>
                      {favourites.find((el) => el === player?.id) ? (
                        <HeartFill
                          onClick={() => {
                            dispatch({ type: REMOVE_FAV_COM, payload: player?.id });
                          }} 
                        />
                      ) : (
                        <Heart
                          onClick={() => {
                            dispatch({ type: ADD_TO_FAVOURITE, payload: player?.id });
                          }}
                        />
                      )}
                  </span>
            </Col>
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex">
                <a href="/">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="/">
                  <img src={prev} alt="prev" />
                </a>
                <a href="/">
                  <img src={play} alt="play" />
                </a>
                <a href="/">
                  <img src={next} alt="next" />
                </a>
                <a href="/">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default PlayBar