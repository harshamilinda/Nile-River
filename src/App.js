import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Customer from './Customer/Customer';

class App extends Component {
  state = {
    authors: [
      { name: 'Henry Morton Stanley' },
      { name: 'John Hanning Speke' }
    ],
    isLoad: false,
    customers: [
      { id: 'c1', name: 'Cristina', summary: 'From England', imageUrl: 'http://aonews.mv/wp-content/uploads/2017/09/5085641-beautiful-girls-images.jpg' },
      { id: 'c2', name: 'Cathey', summary: 'From France', imageUrl: 'http://homemderespeito.com/blog/wp-content/uploads/2016/11/coisas-que-as-mulheres-gostam-nos-homens-768x358.jpg' },
      { id: 'c3', name: 'Riyana', summary: 'From Australia', imageUrl: 'https://hips.hearstapps.com/ellees.h-cdn.co/assets/17/17/2560x1706/gallery-1493195855-gettyimages-606210836.jpg' }
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

  defaultNameChangeHandler = (event) => {
    this.setState({
      authors: [
        { name: event.target.value },
        { name: 'John Hanning Speke' }
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      authors: [
        { name: 'Henry Morton Stanley' },
        { name: event.target.value }
      ]
    });
  }

  toggleLoadHandler = () => {
    const loadData = this.state.isLoad;
    this.setState({
      isLoad: !loadData
    });
  }

  deletedHandler = (customerIndex) => {
    const customers = [...this.state.customers];
    customers.splice(customerIndex, 1);
    this.setState({ customers: customers })
  }

  render() {

    let nav =
      (
        <ul>
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      );

    let defaultPerson =
      (
        <Person click={this.refreshHandler.bind(this, 'Michael Llewelyn Davies')}
          author={this.state.authors[0].name}
          textChange={this.defaultNameChangeHandler}
          name=" River in Africa">There are two theories about the age of the integrated Nile. One is that the integrated drainage of the Nile is of young age,
        </Person>
      );

    let persons = null;
    if (this.state.isLoad) {
      persons = (
        <div>
          <Person click={this.refreshHandler.bind(this, 'Michael Llewelyn Davies')}
            author={this.state.authors[1].name}
            textChange={this.nameChangeHandler}
            name=" River in Africa">The features that became Niagara Falls were created by the Wisconsin glaciation about 10,000 years ago.
        </Person>
        </div>
      );
    }

    let customers = null;
    if (this.state.isLoad) {
      customers = (
        <div>
          {this.state.customers.map((item, index) => {
            return <Customer name={item.name}
              summary={item.summary}
              click={() => this.deletedHandler(index)}
              imageUrl={item.imageUrl} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <div>
          {nav}
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hi, Harsha</h1>
        </header>
        <div className='Buttton-Container'>
          <button className='mini-button' onClick={this.refreshHandler.bind(this, 'John Hanning Speke')}>Refresh</button>
          <button className='mini-button' onClick={this.toggleLoadHandler} >Toggle</button>
        </div>
        <div>
          {/* {defaultPerson} */}
          {/* {persons} */}
        </div>
        <div className="wrapper1">
          <div className="content">
            <div className="list">
              {customers}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
