import styles from './Navbar.module.css';
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
} from '@mui/material';

const Navbar = () => {
  return (
    <div>
      <AppBar color="transparent" className={styles.appbar} elevation={0}>
        <Toolbar>
          <Typography variant="h4" color="white" className={styles.pictures}>
            pictures
          </Typography>
          <List className={styles.list}>
            <ListItem>
              <Link underline="hover" color="white">
                videos
              </Link>
            </ListItem>
            <ListItem>
              <Link underline="hover" color="white">
                about
              </Link>
            </ListItem>
            <ListItem>
              <Link underline="hover" color="white">
                contact
              </Link>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

/* const Navbar = () => {
  return (
    <div>
      <AppBar className={styles.navbar} elevation={0}>
        <Toolbar>
          <h1>Pictures</h1>
          <ul>
            <li>
              <a href="/#">videos</a>
            </li>
            <li>
              <a href="/#">about</a>
            </li>
            <li>
              <a href="/#">contact</a>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
 */
