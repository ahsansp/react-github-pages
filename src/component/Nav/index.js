import {
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Button,
} from "react-bootstrap";
import { Logo } from "../../asset";
import "./style.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
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
      </Container>
    </Navbar>
  );
}

export default NavBar;
