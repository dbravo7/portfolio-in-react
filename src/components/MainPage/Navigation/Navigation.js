import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Navigation = (props) => {
  return (
    // <div className="wrapper">
    <React.Fragment>
      <nav role="navigation">
        <button type="button" class="dropbtn">
          <div className="bars"></div>
          <div className="bars"></div>
          <div className="bars"></div>
        </button>
        <div className="menu hide">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li className="dropdown_submenu">
              <a href="#projects" className="submenu_head">Projects</a>
              <ul className="submenu">
                <li>
                  <Link to="/quizApp">Quiz App</Link>
                </li>
                <li>
                  <Link to="/duoTranslate">DuoTranslate</Link>
                </li>
              </ul>
            </li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <header role="banner" className="main_header">
        <h1 className="header_h1 white">I came. I saw. I coded.</h1>
        <h2 className="white">~ David Bravo</h2>
        <p className="white">Problem solver making programs functional and code readable.</p>
      </header>
    </React.Fragment>
    //</div> 
  );
}; 

export default Navigation; 