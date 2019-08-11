import React from 'react';
import { Route, Switch } from 'react-router-dom'; 

import MainPage from './components/MainPage/MainPage';
import QuizApp from './components/ProjectPage1/ProjectPage1'; 
import DuoTranslate from './components/ProjectPage2/ProjectPage2'; 
import About from './components/AboutPage/AboutPage';
import './App.css';

const App = props => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/about" component={About} /> 
      <Route path="/quizApp" component={QuizApp} /> 
      <Route path="/duoTranslate" component={DuoTranslate} /> 
    </Switch> 
  );
}

export default App;
