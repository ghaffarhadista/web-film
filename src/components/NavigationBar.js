import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand className="text-white">GHAFLIX</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">Trending</Nav.Link>
            <Nav.Link>SuperHero</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
