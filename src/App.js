import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state ={
      authors: [
        { name:'Henry Morton Stanley'},
        { name:'John Hanning Speke'}
      ]
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hi, Harsha</h1>
        </header>
        <Person author={this.state.authors[1].name} name=" River in Africa">There are two theories about the age of the integrated Nile. One is that the integrated drainage of the Nile is of young age, 
        and that the Nile basin was formerly broken into series of separate basins, 
        only the most northerly of which fed a river following the present course of the Nile in Egypt and Sudan</Person>
        <button onClick={this.refreshHandler}>Refresh</button>
      </div>
    );
  }
  refreshHandler = () => {
    console.log('Refresh Handler clicked!');
  }
}

export default App;
