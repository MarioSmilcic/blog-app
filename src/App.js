import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../src/components/Footer/Footer';
import Hero from '../src/components/Hero/Hero';
import Main from '../src/components/Main/Main';
import AboutPage from '../src/pages/About/AboutPage';
import ContactPage from '../src/pages/Contact/ContactPage';
import OurNavbar from '../src/components/OurNavbar/OurNavbar';

const App = () => {
  return (
    <>
      <OurNavbar />
      <Switch>
        <Route exact path="/">
          <Hero />
          <Main />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="*"></Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
