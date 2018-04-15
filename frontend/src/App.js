import React, { Component } from 'react';
import './App.css';
import { Map, Search } from './components'



class App extends Component {
  render() {
    return (
      <div>
        <Search/>
        <Map/>
        </div>
    );
  }
}

export default App;
