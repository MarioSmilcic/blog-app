import styles from "./Hero.module.css";
import OurButton from "../OurButton/OurButton";
import { Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <div>
      <div className={styles.hero}>
        <Container fluid>
          <Row
            className="justify-content-md-center text-light text-center  gy-5  "
            sm={2}
          ></Row>

          <Row className="justify-content-md-center text-center mt-5 pt-5 ">
            <OurButton />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
