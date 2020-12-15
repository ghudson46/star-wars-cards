import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import allCharacters from './pages/AllCharacters';
import searchFrom from './pages/SearchForm';
import Home from './pages/Home';

import Navbar from './components/Navbar/Navbar';


function App() {
  



  return (
    <Router>
      <div className="App">
        <img src='https://i.pinimg.com/originals/2f/48/54/2f4854e80863db8219a256c7a35bd034.png' alt='star wars logo' style={{alignItems: 'center', width: '50%', height: '30%', margin: '3rem 0'}} />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/all' component={allCharacters}/>
          <Route path='/search' component={searchFrom}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
