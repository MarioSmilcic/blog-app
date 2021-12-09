import { useState, useEffect } from 'react';
import styles from './Main.module.css';
import CardComponent from '../Card/Card';
import { Row, Container, Tabs, Tab } from 'react-bootstrap';

//API_KEY = 775233f226ed41cc9852287b734bcbf0

const Main = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [techCrunch, setTechCrunch] = useState([]);
  const [tesla, setTesla] = useState([]);

  /* allPosts */
  useEffect(() => {
    const url =
      'https://newsapi.org/v2/everything?q=apple&from=2021-12-06&to=2021-12-06&sortBy=popularity&apiKey=775233f226ed41cc9852287b734bcbf0775233f226ed41cc9852287b734bcbf0';
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data.articles);
        setAllPosts(data.articles);
      });
  });

  /* techChrunch */

  useEffect(() => {
    const url =
      'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=775233f226ed41cc9852287b734bcbf0';

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTechCrunch(data.articles);
      });
  });

  /* tesla */

  useEffect(() => {
    const url =
      'https://newsapi.org/v2/everything?q=tesla&from=2021-11-07&sortBy=publishedAt&apiKey=775233f226ed41cc9852287b734bcbf0';

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTesla(data.articles);
      });
  });

  return (
    <Container fluid>
      <Row>
        <h2 className="text-secondary my-5">Our Pictures Catalog</h2>
      </Row>
      <Tabs defaultActiveKey="home" className="mb-3">
        <Tab eventKey="allPosts" title="AllPosts">
          <Row>
            {allPosts?.map((post) => {
              return (
                <CardComponent
                  key={post.id}
                  img={post.urlToImage}
                  text={post.text}
                  title={post.title}
                />
              );
            })}
          </Row>
        </Tab>
        <Tab eventKey="techCrunch" title="TechCrunch">
          <Row>
            {techCrunch?.map((post) => {
              return (
                <CardComponent
                  key={post.id}
                  img={post.urlToImage}
                  text={post.text}
                  title={post.title}
                />
              );
            })}
          </Row>
        </Tab>
        <Tab eventKey="tesla" title="Tesla">
          <Row>
            {tesla?.map((post) => {
              return (
                <CardComponent
                  key={post.id}
                  img={post.urlToImage}
                  text={post.text}
                  title={post.title}
                />
              );
            })}
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Main;

/*  const DUMMY_POSTS = [
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
  ]; */

/* <Row>
        {DUMMY_POSTS.map((post) => {
          return (
            <CardComponent
              imgSrc={post.imgSrc}
              text={post.text}
              title={post.title}
            />
          );
        })}
      </Row> */
