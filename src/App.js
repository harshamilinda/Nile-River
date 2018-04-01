import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    authors: [
      { name: 'Henry Morton Stanley' },
      { name: 'John Hanning Speke' }
    ]
  }

  refreshHandler = (newName) => {
    this.setState({
      authors: [
        { name: 'John Hanning Speke' },
        { name: newName }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      authors: [
        { name: 'Luther Lecx' },
        { name: event.target.value}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hi, Harsha</h1>
        </header>
        <Person click={this.refreshHandler.bind(this,'Michael Llewelyn Davies')} 
                author={this.state.authors[1].name} 
                textChange={this.nameChangeHandler}
                name=" River in Africa">There are two theories about the age of the integrated Nile. One is that the integrated drainage of the Nile is of young age,
        and that the Nile basin was formerly broken into series of separate basins,
        only the most northerly of which fed a river following the present course of the Nile in Egypt and Sudan</Person>
        <div className='Buttton-Container'><button className='mini-button' 
                onClick={this.refreshHandler.bind(this, 'John Hanning Speke')}>Refresh</button></div>
        
      </div>
    );
  }

}

export default App;
