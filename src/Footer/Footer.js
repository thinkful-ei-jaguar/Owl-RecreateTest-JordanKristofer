import React from 'react'
import './Footer.css'

class Footer extends React.Component {
  render(){
    return(
      <div className='Footer'>
        <div className='left'>
          <button value='Expand Stage' type='button'/>
          <button type='button'>Thumbs Up</button>
          <button type='button'>Thumbs Down</button>
          <button type='button'>Raise Hand</button>
          <button type='button'>Clap</button>
        </div>
        <div className='right'>
          <button type='button'>Video</button>
          <button type='button'>Mute</button>
          <button type='button'>Share-Screen</button>
          <button type='button'>Leave Stage</button>
        </div>
      </div>
    )
  }
}

export default Footer;