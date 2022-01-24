import React, { Component } from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arr = ['JavaScript', 'React', 'Jest', 'HTML', 'CSS', 'ReactNavite'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>{arr.map((item) => Task(item))}</ul>
      </div>
    );
  }
}

export default App;
