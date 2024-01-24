import { Col, Row } from "react-bootstrap"
import SearchResult from "./SearchResult"
import { useSelector } from "react-redux"
import AlbumHome from "./AlbumHome"

import { TopLinks } from "./TopLinks";

const MainMusic = () => {
  const search = useSelector((state) => state.search.search)
  
  return (
    <Col xs={12} md={9} className="offset-md-3 mainPage">
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
        <TopLinks />
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div
            id="searchResults"
            style={{ display: search.length !== 0 ? "block" : "none" }}
          >
            <h2>Search Result</h2>
            <SearchResult />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock</h2>
            <AlbumHome artistName={"queen"} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <AlbumHome artistName={"madonna"} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>HipHop</h2>
            <AlbumHome artistName={"eminem"} />
          </div>
        </Col>
      </Row>
    </Col>
  )
}

export default MainMusic