import styles from './Footer.module.css';
import { Grid, Paper, Typography, Link, Button } from '@mui/material';

const Footer = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={6} sm={12} xs={12} lg={6} direction="column">
          <Paper elevation={0}>
            <Typography
              variant="h4"
              color="primary"
              align="center"
              gutterBottom
            >
              Latest Updates
            </Typography>
            <Typography color="gray">
              Please subscribe our newsletter for upcoming new videos and latest
              information about our work. Thank you.
            </Typography>
            <Button variant="contained">Subscribe </Button>
          </Paper>
        </Grid>
        <Grid item md={3} sm={12} xs={12} lg={3}>
          <Paper>
            <Grid container direction="column">
              <Typography variant="h4" color="primary" gutterBottom>
                Quick Links
              </Typography>
              <Link underline="hover" color="gray">
                Duis bibendum
              </Link>
              <Link underline="hover" color="gray">
                Purus non dignissim
              </Link>
              <Link underline="hover" color="gray">
                Sapien metus gravida
              </Link>
              <Link underline="hover" color="gray">
                Eget consenquat
              </Link>
              <Link underline="hover" color="gray">
                Praesent eu pulvinar
              </Link>
            </Grid>
          </Paper>
        </Grid>
        <Grid item md={3} sm={12} xs={12} lg={3}>
          <Paper>
            <Grid container direction="column">
              <Typography variant="h4" color="primary" gutterBottom>
                Our Pages
              </Typography>
              <Link underline="hover" color="gray">
                Our Videos
              </Link>
              <Link underline="hover" color="gray">
                {' '}
                Licence Terms
              </Link>
              <Link underline="hover" color="gray">
                About Us
              </Link>
              <Link underline="hover" color="gray">
                Contact{' '}
              </Link>
              <Link underline="hover" color="gray">
                Privacy Policies
              </Link>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
