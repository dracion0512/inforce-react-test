import React from "react";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { sortList } from "../../features/list/listSlice";
import { useNavigate } from "react-router-dom";

function MainHeader(props) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SortList = (event, tag) => {
    dispatch(sortList(tag));
  };

  const handlerClickHome = (event) => {
    navigate(`/`);
  };

  return (
    <Navbar
      as="header"
      variant="dark"
      bg="dark"
      className="user-select-none"
      expand="md"
    >
      <Container>
        <Navbar.Brand>
          <img
            className="logo"
            src="https://odesk-prod-portraits.s3.amazonaws.com/Companies:6629209:CompanyLogoURL?AWSAccessKeyId=AKIAIKIUKM3HBSWUGCNQ&Expires=2147483647&Signature=VuL8D7N4R5Lpa7lkYQcq%2FI3zYIQ%3D"
          />
          Inforce test app
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse
          className="justify-content-end"
          id="header-navbar-dark-example"
        >
          <Nav>
            <Navbar.Text className="px-2">
              Made by{" "}
              <a href="https://djinni.co/q/c60edfe5a1/">Alexander Dracion</a>
            </Navbar.Text>
            <Nav.Link onClick={() => handlerClickHome()}>Home</Nav.Link>
            <NavDropdown
              id="header-dropdown-dark-example"
              title="Sorting by"
              menuVariant="dark"
              align="end"
              variant="dark"
            >
              <NavDropdown.Item onClick={(e) => SortList(e, "name")}>
                Sort by name
              </NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => SortList(e, "number")}>
                Sort by number of goods
              </NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => SortList(e, "width")}>
                Sort by width
              </NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => SortList(e, "height")}>
                Sort by height
              </NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => SortList(e, "weight")}>
                Sort by weight
              </NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => SortList(e, "comments")}>
                Sort by the most commented
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainHeader;
