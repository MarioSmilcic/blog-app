import react from 'react';
import Button from '@mui/material/Button';
import React from 'react';
import Card from '../src/components/Card/Card';
import Footer from '../src/components/Footer/Footer';
import Hero from '../src/components/Hero/Hero';
import Main from '../src/components/Main/Main';
import Navbar from '../src/components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Card />
      <Footer />
      <Hero />
      <Main />
      <Navbar />
    </div>
  );
};

export default App;

/* <>
      <div>hello world</div>
      <Button variant="contained">Hello World</Button>;
    </> */
