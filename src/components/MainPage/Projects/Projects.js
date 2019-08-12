import React from 'react'; 
import { Link } from 'react-router-dom'; 

import QuizApp from './QuizApp/QuizApp'; 
import DuoTranslate from './DuoTrasnslate/DuoTranslate'; 

const Projects = () => {

  return (
    <main role="main">
      <Link name="projects"></Link>
      <div className="projects_main">
       <QuizApp />
       <DuoTranslate /> 
      </div>
    </main>
  )
};

export default Projects; 