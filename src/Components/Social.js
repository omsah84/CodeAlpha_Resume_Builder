import React, { Component } from 'react'

import './Social.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export class Social extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon icon={solid("github")} beat size="sm" />
       
      </div>
    )
  }
}

export default Social
