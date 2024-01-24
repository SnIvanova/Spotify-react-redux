import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import SearchResult from "./SearchResult";
import AlbumHome from "./AlbumHome";
import TopLinks from "./TopLinks";
import { useSelector, useDispatch } from "react-redux";
import { getAlbum } from "../redux/action";
import { CATEGORIES } from "./Categories";

// Function to fetch albums for each category
const fetchAlbums = (dispatch, categories) => {
  categories.forEach(({ name, artistList, seed }) => {
    dispatch(getAlbum(artistList[0], name));
  });
};

// Component to render main music page
const MainMusic = () => {
  const search = useSelector((state) => state.search.search);
  const dispatch = useDispatch();

  // Fetch albums on component mount
  useEffect(() => {
    fetchAlbums(dispatch, CATEGORIES);
  }, [dispatch]);

  // Render main music page
  return (
    <Col xs={12} md={9} className="offset-md-3 mainPage">
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <TopLinks />
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          {search.length !== 0 && (
            <div id="searchResults">
              <h2>Search Result</h2>
              <SearchResult />
            </div>
          )}
        </Col>
      </Row>
      {CATEGORIES.map(({ name, artistList, seed }) => (
        <Row key={`${name}-${artistList.join(",")}`}>
          <Col xs={10}>
            <div id={name.toLowerCase()} className="category-section">
              <h2>{name}</h2>
              <AlbumHome category={name} seed={seed} />
            </div>
          </Col>
        </Row>
      ))}
    </Col>
  );
};

export default MainMusic;
