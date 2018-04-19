import React, { Component } from 'react';
import { Map, Search } from './components'

class App extends Component {
  render() {
    return (
      <div>
        <Search onSubmit={this.log}/>
        <Map/>
        </div>
    );
  }
}

export default App;
