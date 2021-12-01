import styles from './Hero.module.css';
import Navbar from '../Navbar/Navbar';
import OurButton from '../OurButton/OurButton';
import { Typography } from '@mui/material';

const Hero = () => {
  return (
    <div>
      <div className={styles.hero}>
        <Typography
          color="primary"
          variant="h4"
          className={styles.text}
          color="#fff"
        >
          "Ovo je nas blog. Nas blog je ovo. Ovo je nas blog" (Mika Antic)
        </Typography>
        <div>
          <OurButton />
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default Hero;
