import React from 'react';

const Layout = React.createClass({
  displayName: 'Keycode-Layout',

  render() {
    return (
      <div id="layout-main" className="layout">
        <div>{this.props.children}</div>
      </div>
    )
  }
});

export { Layout };
