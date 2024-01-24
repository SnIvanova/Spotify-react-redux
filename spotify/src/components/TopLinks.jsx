import React from "react";
import { Col, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopLinks = () => (
  <Col xs={12} lg={10} className="mainLinks d-none d-md-flex p-1">
    <Nav>
      <NavItem as="span">
        <Link to="/" className="nav-link">
          TRENDING
        </Link>
      </NavItem>
      <NavItem as="span">
        <Link to="/" className="nav-link">
          PODCAST
        </Link>
      </NavItem>
      <NavItem as="span">
        <Link to="/" className="nav-link">
          MOODS AND GENRES
        </Link>
      </NavItem>
      <NavItem as="span">
        <Link to="/" className="nav-link">
          NEW RELEASES
        </Link>
      </NavItem>
      <NavItem as="span">
        <Link to="/" className="nav-link">
          DISCOVER
        </Link>
      </NavItem>
    </Nav>
  </Col>
);

export default TopLinks;
