import React, { Component } from 'react';
import service from './service';

class App extends Component {

  componentDidMount() {
    service.fetchDogs();
  }

  render() { 
    return ( 
      <div>

      </div>
     );
  }
}
 
export default App;