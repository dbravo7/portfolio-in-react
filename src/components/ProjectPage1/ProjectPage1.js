import React from 'react'; 


const ProjectPage1 = () => {
  return (
    <div class="first_proj_wrapper">
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
              <a href="index.html#projects" class="submenu_head">Projects</a>
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
      <header role="banner" class="project_header">
        <h1 class="projects_header_h1 white">I came. I saw. I coded.</h1>
        <h2 class="white">~ David Bravo</h2>
      </header>
    </div>

    <main role="main">
      <section class="first_proj_background">
        <div class="projects quiz_app">
          <header class="first_proj_h2 quiz_app_head">
            <h2>quiz app</h2>
            <ul class="first_proj_icons">
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
          </header>
          <p class="first_p">The quiz app assesses one's knowledge of western literature. It is
            made up of 10 questions and keeps track of the question number and
          amount of correct answers.</p>
          <div class="first_block">
            <p>The format is multiple choice and each option is highlighted when
            passed over by the cursor.</p>
            <img src="images/quiz_app_pg2.png" alt="question page of quiz app" class="first_image">
        </div>
            <div class="second_block">
              <p>The answer page reports whether the question was answered correctly.
                It also has a linked image to the classic in question that takes the user to
            where the book can be purchased.</p>
              <img src="images/quiz_app_pg3.png" alt="question page of quiz app" class="second_image">
        </div>
              <div class="third_block">
                <p>At the end of the test, a user can see his or her level based on the
            number of correct answers.</p>
                <img src="images/quiz_app_results_page.png" alt="question page of quiz app" class="third_image">
        </div>
                <p>
                  Try quiz:
          <a href="https://dbravo7.github.io/quiz_app/" target="_blank" class="link">https://dbravo7.github.io/quiz_app/</a>
                  <br><br>
                    Visit repo:
          <a href="https://github.com/dbravo7/quiz_app" target="_blank" class="link">https://github.com/dbravo7/quiz_app</a>
        </p>
      </div>
    </section>
    <Footer /> 
  );
};

export default ProjectPage1; 