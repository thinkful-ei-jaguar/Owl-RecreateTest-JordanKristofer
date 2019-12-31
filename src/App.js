import React, { Component } from 'react';
import './App.css';
import ParticipantsList from './ParticipantList';


class App extends Component {
  static defaultProps = {
    store: {
      participants : [],
    }
  };
  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <div className='Participant-section'>
          <ParticipantsList 
            // WHERE TO ADD PROPS
          />
        </div>
      </main>
    );
  }
};



export default App;
