import React from 'react';
import './App.css';
import AboutMe from './components/pages/about/AboutMe';
import Header from './components/pages/header/Header';
import HomePage from './components/pages/home/HomePage';
import MySkills from './components/pages/skills/MySkills';
import MyWorks from './components/pages/works/MyWorks';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <AboutMe/>
      <MySkills/>
      <MyWorks/>
    </div>
  );
}

export default App;
