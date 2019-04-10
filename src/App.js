import React, { Component } from 'react';
import './App.css';
import Metronome from './containers/Metronome';

class App extends Component {
  render() {
    return (
      <div className="App">
				<h1>React Metronome</h1>
				<Metronome/>
      </div>
    );
  }
}

export default App;
