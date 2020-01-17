import React from 'react'
import './NavBar.css'
import ParticipantsList from '../ParticipantList/ParticipantList'
import ChatLog from '../ChatLog/ChatLog'

export default class NavBar extends React.Component {
  render(){
    return(
      <div className='Nav'>
        <div className='Chat-List'>
          <button className='ChatButton' type='button'>Chat</button>
          <button className='ParticipantsButton' type='button'>Participants</button>
        </div>
        <ParticipantsList 
          participants={this.props.participants}/>
        <ChatLog 
          participants={this.props.participants}
          chatEvents={this.props.chatEvents} />
      </div>
    )
  }
}