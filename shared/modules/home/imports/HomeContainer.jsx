import React from 'react';
import { Link } from 'react-router';

const HomeContainer = React.createClass({
  displayName: 'Keycode-HomeContainer',

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
