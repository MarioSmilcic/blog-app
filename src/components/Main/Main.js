import styles from './Main.module.css';
import CardComponent from '../Card/Card';
import { Row, Col, Container } from 'react-bootstrap';

const Main = () => {
  const DUMMY_POSTS = [
    {
      imgSrc: 'img1',
      title: 'Leonardo',
      text: 'ovo je Ninja kornjaca',
    },
    {
      imgSrc: 'img2',
      title: 'Rafaelo',
      text: 'ovo je Ninja kornjaca',
    },
    {
      imgSrc: 'img3',
      title: 'Mikelandjelo',
      text: 'ovo je Ninja kornjaca',
    },
    {
      imgSrc: 'img3',
      title: 'Donatelo',
      text: 'ovo je Ninja kornjaca',
    },
    {
      imgSrc: 'img3',
      title: 'Splinter',
      text: 'ovo je ucitelj Ninja kornjace',
    },
    {
      imgSrc: 'img3',
      title: 'Sjekac',
      text: 'ovo je neprijatelj Ninja kornjace',
    },
    {
      imgSrc: 'img3',
      title: 'Krang',
      text: 'ovo je neprijatelj kornjace',
    },
  ];

  return (
    <Container fluid>
      <Row>
        <h2 className="text-secondary my-5">Our Pictures Catalog</h2>
      </Row>
      <Row>
        {DUMMY_POSTS.map((post) => {
          return (
            <CardComponent
              imgSrc={post.imgSrc}
              text={post.text}
              title={post.title}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default Main;
