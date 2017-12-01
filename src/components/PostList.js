import React from "react";
import PostItem from "./PostItem";
export default class PostList extends React.Component {
  render() {
    console.log("rendered");
    console.log(this.props.postList);
    return (
      <table className="responstable">
        <tbody>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Remove</th>
            <th>Update</th>
          </tr>
          {Object.keys(this.props.postList).map(key => {
            let post = this.props.postList[key];
            return (
              <PostItem
                key={post.postId}
                onRemovePost={this.props.onRemovePost}
                post={post}
                onUpdatePost={this.props.onUpdatePost}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}
