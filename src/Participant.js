import React from 'react';

function Participant (props){
  return (
    <div className='Participant'>
      <img className='Person-image' href={props.avatar} alt=''/>
      <p className='Person-name'>{props.name}</p>
      <div className='status'>{props.inSession}</div>
      <div className='stage'>{props.onStage}</div>
    </div>
  )
};

export default Participant;