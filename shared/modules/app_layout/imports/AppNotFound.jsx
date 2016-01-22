import React from 'react'
import { Link } from 'react-router'
import { Constants } from '../../../imports/constants.jsx'

const AppNotFound = React.createClass({
  displayName: `${Constants.prefix || ''}AppNotFound`,

  render() {
    return (
      <div>
        <h1>AppNotFound</h1>
        <Link to={{ pathname: '/home' }}>Go Home</Link>
      </div>
    )
  }
});

export { AppNotFound }
