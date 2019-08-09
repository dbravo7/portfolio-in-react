import React, { useState } from 'react'; 

import Project1 from './Project1/Project1'; 
import Project2 from './Project2/Project2'; 

const Projects = () => {

  return (
    <main role="main">
      <a name="projects"></a>
      <div class="projects_main">
       <Project1 />
       <Project2 /> 
      </div>
    </main>
  )
};

export default Projects; 