import { Container, Nav, Navbar } from 'react-bootstrap'

function NavBar() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Mini Projects</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#count">Count</Nav.Link>
          <Nav.Link href="#calculator">Calculator</Nav.Link>
          <Nav.Link href="#todo">To Do</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar
