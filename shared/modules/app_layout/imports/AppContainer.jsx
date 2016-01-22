import React from 'react';
import { Constants } from '../../../imports/constants.jsx'

const AppContainer = React.createClass({
  displayName: `${Constants.prefix || ''}AppContainer`,

  render() {
    return (
      <div id="container">
        {this.props.children}
      </div>
    )
  }
});

export { AppContainer };
