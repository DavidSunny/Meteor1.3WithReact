import { Post_Collection } from '../model/imports/post_model.jsx'

Meteor.publish('post_list', function() {
  return Post_Collection.find();
});