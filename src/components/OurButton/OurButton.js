import { Button } from '@mui/material';
import styles from './Button.module.css';

const OurButton = () => {
  return (
    <div>
      <Button
        color="primary"
        variant="outlined"
        size="large"
        className={styles.button}
      >
        Discover
      </Button>
    </div>
  );
};

export default OurButton;
