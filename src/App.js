import React, { Component } from 'react';
import ParticipantsList from './ParticipantList/ParticipantList';



class App extends Component {
  render() {
    return (
      <main className='App'>
        <div className='Participant-section'>
          <ParticipantsList />
        </div>
      </main>
    );
  }
};



export default App;
