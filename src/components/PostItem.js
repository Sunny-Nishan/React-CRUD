import React from "react";
export default class PostItem extends React.Component {
  render() {
    return (
      <div>
        <h5>Title : {this.props.post.title}</h5>
        <button
          onClick={e => {
            this.props.onRemovePost(this.props.post);
          }}
        >
          Remove
        </button>
        <button
          onClick={e => {
            this.props.onEditPost(this.props.post.postId);
          }}
        >
          Edit
        </button>
      </div>
    );
  }
}
