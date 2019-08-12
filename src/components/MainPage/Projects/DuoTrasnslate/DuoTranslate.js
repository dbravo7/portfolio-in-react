import React from 'react';
import { Link } from 'react-router-dom'; 

const DuoTranslate = () => {
  return (
    <div class="second_project">
      <Link to="/duoTranslate">
        <header class="second_proj_h2">
          <h2>DuoTranslate</h2>
        </header>
        <ul class="proj_icons second_proj">
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

export default DuoTranslate; 