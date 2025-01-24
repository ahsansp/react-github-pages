import { Form, Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Logo } from "../../asset";
import "./style.css";
import { useNavigate } from "react-router-dom";

function NavBar({ props }) {
  const naviget = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            className="rounded-circle shadow"
            alt="Logo"
            width={30}
            height={30}
          />{" "}
          sans-buy
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#/login">Home</Nav.Link>
            <Nav.Link href="#/sigin">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex">
          <Form className="me-2">
            <div className="d-flex rounded-pill">
              <input
                type="text"
                className="form-control d-none d-lg-block"
                placeholder="Search in sans-buy..."
                aria-label="Search in sans-buy..."
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Nav.Link
          className="rounded-circle bg bg-success"
          style={{ width: "50px", height: "50px" }}
          href="#/login"
        >
          <img
            src="https://api.dicebear.com/9.x/initials/svg?seed=ahsans&radius=50"
            alt="avatar"
          />
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
