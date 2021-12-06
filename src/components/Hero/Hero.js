import styles from './Hero.module.css';
import OurNavbar from '../OurNavbar/OurNavbar';
import OurButton from '../OurButton/OurButton';
import { Container, Col, Row, Stack } from 'react-bootstrap';

const Hero = () => {
  return (
    <div>
      <div className={styles.hero}>
        <Container fluid>
          <OurNavbar />
          <Row
            className="justify-content-md-center text-light text-center mt-5 pt-5 gy-5  "
            sm={2}
          >
            <h2>
              "Ovo je naš blog. Naš blog je ovo. Ovo je naš blog" (Mika Antić)
            </h2>
          </Row>
          <Row className="justify-content-md-center text-center mt-5 pt-5 gy-5">
            <OurButton />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
