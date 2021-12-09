import styles from './Footer.module.css';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
const Footer = () => {
  return (
    <Container fluid>
      <Row className="mt-5 pt-3">
        <Col xl={6} lg={12} className="mb-4">
          <div className="p-5 h-100 bg-light">
            <h3 className="text-primary mb-3">
              Do you want to get our latest updates?
            </h3>
            <p className="text-secondary mb-5">
              Please subscribe our newsletter for upcoming new videos and latest
              information about our work. Thank you.
            </p>

            <Form>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Control
                      type="email"
                      placeholder="Your Email.."
                    ></Form.Control>
                  </Col>
                  <Col>
                    <Button variant="primary size">Subscribe</Button>
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </div>
        </Col>
        <Col xl={3} lg={6} md={6} sm={6} className="mb-4  ">
          <div className="p-5 bg-light">
            <h3 className="text-primary mb-4 ">Quick Links</h3>
            <ul className={styles.footerLink}>
              <li>
                <a href="/#">Duis bibendum</a>
              </li>
              <li>
                <a href="/#">Purus non dignissim</a>
              </li>
              <li>
                <a href="/#">Sapien metus gravida</a>
              </li>
              <li>
                <a href="/#">Eget consequat</a>
              </li>
              <li>
                <a href="/#">Praesent eu pulvinar</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col xl={3} lg={6} md={6} sm={6} className="mb-4 ">
          <div className="p-5 h-100 bg-light">
            <h3 className="text-primary mb-4">Our Pages</h3>
            <ul className={styles.footerLink}>
              <li>
                <a href="/#">Our Videos</a>
              </li>
              <li>
                <a href="/#">License Terms</a>
              </li>
              <li>
                <a href="/#">About Us</a>
              </li>
              <li>
                <a href="/#">Contact</a>
              </li>
              <li>
                <a href="/#">Privacy Policies</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
