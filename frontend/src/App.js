import React, { Component } from 'react';
import { Map, Search } from './components'
import Change from './reducers/MapCoordinates'

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
