import styles from './Main.module.css';
import { Typography } from '@mui/material';
import CardComponent from '../Card/Card';

const Main = () => {
  return (
    <div>
      <Typography variant="h2" color="textSecondary" gutterBottom={true}>
        Our Pictures Catalog
      </Typography>
      <CardComponent />
    </div>
  );
};

export default Main;
