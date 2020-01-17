import React from 'react'
import './Participant.css'

function Participant (props){
  return (
    <div className='Participant'>
      <img className='Person-image' src={props.avatar} alt={props.name}/>
      <div className='Person-info'>
        <p className='Person-name'>{props.name}</p>
        <div className='Person-activity'>
          <div className='Person-status'>{props.inSession ? 'active' : 'left session'}</div>
          <div className='Person-stage'>{props.onStage ? 'on stage' : 'in session'}</div>
        </div>
      </div>
    </div>
  )
};

export default Participant;