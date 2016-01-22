import React from 'react'
import { Link } from 'react-router'

const AppNotFound = React.createClass({
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