import React from 'react'; 
import { Link } from 'react-router-dom'; 

const QuizApp = () => {
  return (
    <div class="first_project">
      <Link to="/quizApp">
        <header class="first_proj_h2">
          <h2>Quiz App</h2>
        </header>
        <ul class="proj_icons first_proj">
          <li>
            <i class='fab fa-html5'></i>
          </li>
          <li>
            <i class='fab fa-css3-alt'></i>
          </li>
          <li>
            <i class='fab fa-js'></i>
          </li>
        </ul>
      </Link>
    </div>
  );
};

export default QuizApp;