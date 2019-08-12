import React from 'react'; 

import Navigation from './Navigation/Navigation'; 
import Footer from './Footer/Footer'; 
import Projects from './Projects/Projects'; 
import classes from './MainPage.module.css'; 

const mainPage = () => {
  return (
    <div>
      <div className={classes.wrapper}>
        <Navigation />
      </div>
      <Projects />
      <Footer /> 
    </div>
  );
};

export default mainPage; 