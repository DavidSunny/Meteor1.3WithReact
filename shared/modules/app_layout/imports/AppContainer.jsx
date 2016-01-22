import React from 'react';

const AppContainer = React.createClass({
  displayName: 'Keycode-AppContainer',

  render() {
    return (
      <div id="container">
        {this.props.children}
      </div>
    )
  }
});

export { AppContainer };
