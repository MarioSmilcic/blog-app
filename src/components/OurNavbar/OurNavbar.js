import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import { Nav, Navbar, Container } from 'react-bootstrap';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 2,
    path: '/about',
    text: 'About',
  },
  {
    id: 3,
    path: '/contact',
    text: 'Contact',
  },
];

const OurNavbar = () => {
  return (
    <div className="text-uppercase">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="text-center py-3 px-5">
          <Navbar.Brand>
            <img src={logo} alt="logo" className={styles.logo} />
          </Navbar.Brand>
        </Container>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <div className={styles.link}>
            <Nav className="fs-4">
              {links.map((link) => {
                return (
                  <li key={link.id}>
                    <NavLink
                      to={link.path}
                      activeClassName={styles.active}
                      exact
                    >
                      {link.text}
                    </NavLink>
                  </li>
                );
              })}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default OurNavbar;
