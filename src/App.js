import React from 'react';
import { Route } from 'react-router-dom'; 

import MainPage from './components/MainPage/MainPage';
import ProjectPage from './components/ProjectPage/ProjectPage'; 
import './App.css';

const App = props => {
  return (
    <Switch>
      <MainPage />
      <ProjectPage /> 
    </Switch> 
  );
}

export default App;
