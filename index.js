import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import MemeContainer from './components/MemeContainer';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
       <MemeContainer name='Name from props'/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
