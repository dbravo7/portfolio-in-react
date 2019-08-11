import React from 'react'; 
import { Link } from 'react-router-dom'; 

import Project1 from './Project1/Project1'; 
import Project2 from './Project2/Project2'; 

const Projects = () => {

  return (
    <main role="main">
      <Link name="projects"></Link>
      <div className="projects_main">
       <Project1 />
       <Project2 /> 
      </div>
    </main>
  )
};

export default Projects; 