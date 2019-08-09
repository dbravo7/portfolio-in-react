import React from 'react'; 

const Navigation = (props) => {
  return (
    <div className="wrapper">
      <nav role="navigation">
        <button type="button" class="dropbtn">
          <div className="bars"></div>
          <div className="bars"></div>
          <div className="bars"></div>
        </button>
        <div className="menu hide">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about_page.html">About</a></li>
            <li className="dropdown_submenu">
              <a href="#projects" className="submenu_head">Projects</a>
              <ul className="submenu">
                <li>
                  <a href="first_project_page.html">Quiz App</a>
                </li>
                <li>
                  <a href="second_project_page.html">DuoTranslate</a>
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
    </div>
  );
}; 

export default Navigation; 