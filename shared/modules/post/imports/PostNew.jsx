import React from 'react'
import { Constants } from '../../../imports/constants.jsx'

const PostNew = React.createClass({
  displayName: `${Constants.prefix || ''}PostNew`,

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  handleSubmit(e) {
    e.preventDefault();

    const obj = {
      title: e.target.title.value,
      content: e.target.content.value
    };

    console.log('obj: ', obj);

    Meteor.call('insert/post', obj, (err, result) => {
      if (err) {
        console.log('err: ', err);
        return;
      }
      console.log('result: ', result);
      this.context.router.goBack();
    });
  },

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Title: <input type="text" name="title"/><br/>
          Content: <input type="text" name="content"/><br/>
          <input type="submit"/>
        </form>
        <button onClick={(e) => this.context.router.goBack()}>뒤로가기</button>
      </div>
    )
  }
});

export { PostNew };

