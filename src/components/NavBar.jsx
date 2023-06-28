import { Container, Nav, Navbar } from 'react-bootstrap'

function NavBar() {

  return (
    <Navbar expand="lg" style={{boxShadow: '0px 1px 6px rgba(173, 181, 189, 0.3)', width: '100%'}} className="bg-body-tertiary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Mini Projects</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#counter">Interactive Counter</Nav.Link>
          <Nav.Link href="#calculator">Calculator</Nav.Link>
          <Nav.Link href="#todo">To Do</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar
