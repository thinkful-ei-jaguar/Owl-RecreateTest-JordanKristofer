import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Stage from './Stage/Stage';
import Footer from './Footer/Footer';
import ParticipantStore from './ParticipantStore'
import ChatEvents from './ChatEvents'
import './App.css'

class App extends Component {
  static defaultProps = {
    participants: ParticipantStore,
    chatEvents: ChatEvents
  }
  render() {

    return (
      <main className='App'>
        <div className='App-top'>
        <section className='Nav'>
          <NavBar 
            participants={this.props.participants} chatEvents={this.props.chatEvents}
          />
        </section>
        <section className='Stage-area'>
          {this.props.participants.filter(person => person.onStage).map(person => (
            <Stage 
              key={person.id}
              id={person.id}
              name={person.name}
              avatar={person.avatar}
              onStage={person.onStage}
            />
          ))}
        </section>
        </div>
        <section className='Footer'>
          <Footer />
        </section>
      </main>
    );
  }
};



export default App;
