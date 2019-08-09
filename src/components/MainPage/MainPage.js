import React from 'react'; 

import Navigation from './Navigation/Navigation'; 
import Footer from './Footer/Footer'; 
import Projects from './Projects/Projects'; 

const mainPage = () => {
  return (
    <div>
      <Navigation />
      <Projects />
      <Footer /> 
    </div>
  );
};

export default mainPage; 