import React from "react";
import PostItem from "./PostItem";
export default class PostList extends React.Component {
  render() {
    console.log("rendered");
    console.log(this.props.postList);
    return this.props.postList.map(post => {
      return (
        <PostItem
          key={post.postId}
          onEditPost={this.props.onEditPost}
          onRemovePost={this.props.onRemovePost}
          post={post}
        />
      );
    });
  }
}
