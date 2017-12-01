import React from "react";
import PostItem from "./PostItem";
export default class PostList extends React.Component {
  render() {
    console.log("rendered");
    console.log(this.props.postList);
    return (
      <table class="responstable">
        <tr>
          <th>Title</th>
          <th>Content</th>
          <th>Remove</th>
          <th>Update</th>
        </tr>

        {this.props.postList.map(post => {
          return (
            <PostItem
              key={post.postId}
              onEditPost={this.props.onEditPost}
              onRemovePost={this.props.onRemovePost}
              post={post}
              onUpdatePost={this.props.onUpdatePost}
            />
          );
        })}
      </table>
    );
  }
}
