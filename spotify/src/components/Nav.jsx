import { Col, Container, Button, NavLink, NavbarBrand, Row, Navbar } from "react-bootstrap"
import logo from "../assets/logo/logo.png"
import { BookFill, HouseDoorFill } from "react-bootstrap-icons"
import FormSearch from "./FormSearch"

const MyNav = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
        <Navbar expand="md" className="fixed-left justify-content-between" id="sidebar">
            <Container className="flex-column align-items-start">
              <NavbarBrand href="/">
                <img src={logo} alt="Spotify Logo" width="131" height="40" />
              </NavbarBrand>
              <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
                <Navbar.Collapse id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <ul>
                    <li>
                      <NavLink
                        className="nav-item d-flex align-items-center"
                        href="/"
                      >
                        <HouseDoorFill />
                        &nbsp; Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="nav-item d-flex align-items-center"
                        href="/"
                      >
                        <BookFill />
                        &nbsp; Your Library
                      </NavLink>
                    </li>
                    <li>
                       <FormSearch /> 
                    </li>
                  </ul>
                </div>
              
              </Navbar.Collapse>
            </Container>
            <Container>
                <div className="nav-btn">
                <Button className="btn signup-btn" type="button">
                    Sign Up
                </Button>
                <Button className="btn login-btn" type="button">
                    Login
                </Button>
                <a href="/">Cookie Policy</a> |<a href="/"> Privacy</a>
                </div> 
            </Container>
         
          </Navbar>
        </Col>
      </Row>
    </Container>
  )
}

export default MyNav