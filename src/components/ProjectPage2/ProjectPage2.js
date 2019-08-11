import React from 'react'; 

import Navigation from '../MainPage/Navigation/Navigation';
import Footer from '../MainPage/Footer/Footer';  

const ProjectPage2 = () => {
  return (
    <React.Fragment>
      <div class="second_proj_wrapper">
        <Navigation /> 
      </div>

      <main role="main">
        <section class="first_proj_background">
          <div class="projects quiz_app">
            <header class="first_proj_h2 quiz_app_head">
              <h2>DuoTranslate</h2>
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
            <p class="first_p">DuoTranslate allows a user to view parallel machine translations
              for nearly 100 languages. The app also allows for a definition search for over
              20 language pairs.
            </p>
            <div class="first_block">
              <p>DuoTranslate harnesses the power of Google and Yandex engines by making
                simultaenous API calls for cloud translations.
              </p>
              <img src="images/translation_app/main_page.png" alt="main page of app" class="first_image" />
            </div>
            <div class="second_block">
                <p>DuoTranslate's convenient design allows for quick comparison of results.
              The app is particularly useful for understanding complex sentences or technical language.</p>
                <img src="images/translation_app/display_page.png" alt="question page of quiz app" class="second_image" />
            </div>
            <div class="third_block">
              <p>When definitions are available, words are highlighted as the cursor hovers over
                them. When clicked, a new tab opens with definitions and example sentences hosted
                by linguee.com.
              </p>
              <img src="images/translation_app/highlighted_word.png" alt="question page of quiz app" class="third_image" />
            </div>
            <p>
              Try app:
              <a href="https://dbravo7.github.io/translation_app/index.html" target="_blank"
                rel="noopener noreferrer" class="link">DuoTranslate</a>
              <br></br>
                Visit repo:
              <a href="https://github.com/dbravo7/translation_app" target="_blank"
                rel="noopener noreferrer" class="link">DuoTranslate on Github</a>
            </p>
          </div>
        </section>
      </main> 
      <Footer /> 
    </React.Fragment>
  );
}; 

export default ProjectPage2; 