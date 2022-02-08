import { useState, useEffect } from "react";
import CardComponent from "../Card/Card";
import { Row, Container, Tabs, Tab } from "react-bootstrap";

//API_KEY = 775233f226ed41cc9852287b734bcbf0

//super API_KEY = fe8238e5bbb24aa3827e12a7548d6608

const Main = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [techCrunch, setTechCrunch] = useState([]);
  const [tesla, setTesla] = useState([]);

  /* allPosts */
  useEffect(() => {
    const url =
      "https://newsapi.org/v2/everything?q=apple&from=2021-12-06&to=2021-12-06&sortBy=popularity&apiKey=fe8238e5bbb24aa3827e12a7548d6608";
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
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fe8238e5bbb24aa3827e12a7548d6608";

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
      "https://newsapi.org/v2/everything?q=tesla&from=2021-11-07&sortBy=publishedAt&apiKey=fe8238e5bbb24aa3827e12a7548d6608";

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTesla(data.articles);
      });
  });

  return (
    <Container fluid id="main">
      <Row>
        <h2 className="text-secondary my-5">Our Posts Catalog</h2>
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
