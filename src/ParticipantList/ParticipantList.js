import React from 'react';
import Participant from '../Participant/Participant';
import './ParticipantList.css'

class ParticipantsList extends React.Component{
    render(){
        const showParticipants = this.props.participants.map(person => {
            return  <Participant 
                key={person.id} 
                id={person.id} 
                name={person.name} 
                avatar={person.avatar} 
                inSession={person.inSession} 
                onStage={person.onStage}
            />
        });
    
        return(
            <div className='Participant-list'>
                 {showParticipants}
            </div>
        )
    }
}

export default ParticipantsList;