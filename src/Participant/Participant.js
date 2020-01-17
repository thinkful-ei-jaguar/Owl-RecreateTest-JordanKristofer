import React from 'react';

function Participant (props){
  return (
    <div className='Participant'>
      <img className='Person-image' src={props.avatar} alt=''/>
      <p className='Person-name'>{props.name}</p>
      <div className='Person-status'>{props.inSession}</div>
      <div className='Person-stage'>{props.onStage ? 'on stage' : ''}</div>
    </div>
  )
};

export default Participant;