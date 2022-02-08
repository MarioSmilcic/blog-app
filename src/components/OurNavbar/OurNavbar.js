import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { Nav, Navbar, Container } from "react-bootstrap";

const links = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/contact",
    text: "Contact",
  },
];

const OurNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" className="text-uppercase">
      <Container>
        <Navbar.Brand className="mx-1 my-2">
          <img src={logo} alt="logo" className={styles.logo} />
        </Navbar.Brand>
      </Container>
      <Navbar.Toggle className="mx-3 my-3" />
      <Navbar.Collapse className="mx-4">
        <div className={styles.link}>
          <Nav className="fs-4">
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    activeClassName={styles.active}
                    exact
                    className="mx-2"
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
  );
};

export default OurNavbar;
