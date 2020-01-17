import React from 'react';
import './Stage.css'

class Stage extends React.Component{
    render(){
        return (
          <div className='Stage-participant' id={this.props.id}>
             <div className='Stage-name'>{this.props.name}</div>
             <img className='Stage-avatar' src={this.props.avatar} alt={this.props.name}/>
          </div>
        )
      }
    }

export default Stage;