import React, { Component } from 'react';
import List from '../src/Components/List';
import InputList from '../src/Components/InputList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <InputList />
        <List />
      </div>
    );
  }
}

export default App;
