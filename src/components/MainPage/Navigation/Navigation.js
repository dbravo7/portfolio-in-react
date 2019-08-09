import React from 'react'; 

const Navigation = () => {
  return (
    <div class="wrapper">
      <nav role="navigation">
        <button type="button" class="dropbtn">
          <div class="bars"></div>
          <div class="bars"></div>
          <div class="bars"></div>
        </button>
        <div class="menu hide">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about_page.html">About</a></li>
            <li class="dropdown_submenu">
              <a href="#projects" class="submenu_head">Projects</a>
              <ul class="submenu">
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
      <header role="banner" class="main_header">
        <h1 class="header_h1 white">I came. I saw. I coded.</h1>
        <h2 class="white">~ David Bravo</h2>
        <p class="white">Problem solver making programs functional and code readable.</p>
      </header>
    </div>
  );
}; 

export default Navigation; 