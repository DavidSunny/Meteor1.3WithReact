import React from 'react';
import { Link } from 'react-router';
import { Constants } from '../../../imports/constants.jsx'

const HomeContainer = React.createClass({
  displayName: `${Constants.prefix || ''}HomeContainer`,

  render() {
    return (
      <div>
        <h1>This is Home Container</h1>
        <Link to="/post">Post</Link>
      </div>
    )
  }
});

export { HomeContainer };
