const Post_Collection = new Mongo.Collection('posts');

Meteor.methods({
  'insert/post'(obj) {

    obj.createdAt = new Date();

    const postId = Post_Collection.insert(obj);

    return postId;
  }
});

export { Post_Collection };
