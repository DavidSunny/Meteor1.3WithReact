import React from 'react';
import { Constants } from '../../../imports/constants.jsx'

const Layout = React.createClass({
  displayName: `${Constants.prefix || ''}Layout`,

  render() {
    return (
      <div id="layout-main" className="layout">
        <div>{this.props.children}</div>
      </div>
    )
  }
});

export { Layout };
