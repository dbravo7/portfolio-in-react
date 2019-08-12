import React from 'react'; 
import { Link } from 'react-router-dom'; 

import classes from './Navigation.module.css'; 

const Navigation = (props) => {
  return (
    <React.Fragment>
      <nav role="navigation">
        <button type="button" className={classes.dropbtn}>
          <div className={classes.bars}></div>
          <div className={classes.bars}></div>
          <div className={classes.bars}></div>
        </button>
        <div className={classes.menu + classes.hide}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li className="dropdown_submenu">
              <Link to="/#projects" className="submenu_head">Projects</Link>
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
  );
}; 

export default Navigation; 