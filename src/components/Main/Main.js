import styles from './Main.module.css';
import { Card, CardMedia, Typography } from '@mui/material';
import CardComponent from '../Card/Card';

const Main = () => {
  const posts = [
    {
      imgSrc: 'img1',
      title: 'guster1',
      text: 'ovo je guster',
    },
    {
      imgSrc: 'img2',
      title: 'guster2',
      text: 'ovo je guster',
    },
    {
      imgSrc: 'img3',
      title: 'guster3',
      text: 'ovo je guster',
    },
  ];

  return (
    <div>
      <Typography variant="h2" color="textSecondary" gutterBottom={true}>
        Our Pictures Catalog
      </Typography>

      {posts.map((post) => {
        return (
          <CardComponent
            imgSrc={post.imgSrc}
            text={post.text}
            title={post.title}
          />
        );
      })}
    </div>
  );
};

export default Main;
