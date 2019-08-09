import React from 'react'; 

import Navigation from '../MainPage/Navigation/Navigation';
import Footer from '../MainPage/Footer/Footer'; 

const About = () => {
  return (
    <React.Fragment>
      <Navigation />
      <main role="main">
        <section class="about">
          <div class="about_p">
            <p>I am a web developer that finds great satisfaction
            in problem solving and building programs that are dependable.</p>
            <p>I enjoy writing code that developers find easy to read.</p>
            <p > My approach to project management and teamwork has been shaped by years of teaching
            and working as an editor.</p > 
            <p> Overcommunication is key and valuing
            team contributions is essential to delivering an exceptional product.</p>
          </div >
        </section >
      </main>
      <Footer /> 
    </React.Fragment>
  ); 
}; 

export default About; 