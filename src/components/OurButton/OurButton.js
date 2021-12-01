import { Button } from '@mui/material';
import styles from './Button.module.css';

const OurButton = () => {
  return (
    <div>
      <Button
        style={{ backgroundColor: 'white' }}
        // color="primary"
        variant="outlined"
        size="large"
        // className={styles.button}
      >
        Discover
      </Button>
    </div>
  );
};

export default OurButton;
