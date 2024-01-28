import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Player from "./Player";
import Main from "./Main";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={12} md={9} className="offset-md-3 mainPage">
          <Main />
        </Col>
      </Row>
      <Player />
    </Container>
  );
};

export default Home;
