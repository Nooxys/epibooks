import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const MyNav = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand className="pb-0" href="#home">
          <img
            className="mx-4 "
            width={100}
            src="https://cdn.pixabay.com/photo/2017/08/09/17/20/bible-2615221_1280.png"
            alt="book_logo"
          />
          <span className="fs-3 me-3">EPIBOOKS</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link active href="#">
              <i class="bi bi-house-door-fill"></i> Home
            </Nav.Link>
            <Nav.Link href="#">
              <i class="bi bi-info-circle"></i> About
            </Nav.Link>
            <NavDropdown title="Browse" id="collapsible-nav-dropdown">
              <NavDropdown.Item disabled href="#">
                Coming soon
              </NavDropdown.Item>
              <NavDropdown.Item disabled href="#">
                Coming Soon
              </NavDropdown.Item>
              <NavDropdown.Item disabled href="#">
                Coming Soon
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item disabled href="#">
                Coming Soon
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
