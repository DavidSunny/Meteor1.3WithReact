import React from 'react'
import { Link } from 'react-router'
import { Post_Collection } from '../model/imports/post_model.jsx'
import { Constants } from '../../../imports/constants.jsx'

const ListItem = React.createClass({
  displayName: `${Constants.prefix || ''}ListItem${Constants.suffix || ''}`,

  render() {
    const item = this.props.item;
    if (! item) return null;

    return (
      <li>
        <p>Title: {item.title}</p>
        <p>Content: {item.content}</p>
      </li>
    )
  }
});

const PostContainer = React.createClass({
  displayName: `${Constants.prefix || ''}PostContainer`,

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  mixins: [ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe('post_list');
    const list = Post_Collection.find({}, {sort: {createdAt: -1}}).fetch();

    return {
      loading: !handle.ready(),
      list
    }
  },

  handlePush(e) {
    e.preventDefault();

    this.context.router.push('/home')
  },

  renderList() {
    return this.data.list.map((item, i) => (
      <ListItem key={item._id} item={item} sequence={'_'+i}/>
    ));
  },

  render() {
    console.log('this.data.loading: ', this.data.loading);
    
    if (this.data.loading) return null;

    console.log('this.data.list: ', this.data.list);

    return (
      <div>
        <Link to="/post/new">Write</Link>
        <h1>This is Post Container</h1>
        <a href="/home" onClick={this.handlePush}>Home</a>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    )
  }
});

export { PostContainer };
