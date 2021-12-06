import styles from './Navbar.module.css';

import { Nav, Navbar, Container } from 'react-bootstrap';
import { BsCameraVideo } from 'react-icons/bs';

const OurNavbar = () => {
  return (
    <div className="text-uppercase">
      <Navbar variant="dark" expand="lg">
        <Container className="text-center">
          <Navbar.Brand>
            <BsCameraVideo className="fs-1" />
            <h3 className="fs-3">Pictures</h3>
          </Navbar.Brand>
        </Container>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="fs-4 ">
            <Nav.Link>videos</Nav.Link>
            <Nav.Link>about</Nav.Link>
            <Nav.Link>contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default OurNavbar;
