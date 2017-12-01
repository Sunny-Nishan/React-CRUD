import React from "react";
export default class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: undefined
    };
  }
  handleChange = event => {
    this.state.post = {
      ...this.state.post,
      [event.target.name]: event.target.value
    };
    this.setState({ post: this.state.post });
  };
  onEditPost = () => {
    this.setState({
      editMode: true,
      post: this.props.post
    });
    this.props.onEditPost(this.props.post.postId);
  };
  onUpdatePost = () => {
    this.props.onUpdatePost(this.state.post);
    this.setState({
      editMode: false,
      post: undefined
    });
  };
  render() {
    return (
      <tr>
        <td>
          {this.state.editMode ? (
            <input
              type="text"
              name="title"
              value={this.state.post.title}
              onChange={this.handleChange}
            />
          ) : (
            <h5>{this.props.post.title}</h5>
          )}
        </td>
        <td>
          {this.state.editMode ? (
            <textarea
              type="text"
              name="content"
              value={this.state.post.content}
              onChange={this.handleChange}
            />
          ) : (
            <p>{this.props.post.content}</p>
          )}
        </td>
        <td>
          <button
            class="btn"
            onClick={e => {
              this.props.onRemovePost(this.props.post);
            }}
          >
            Remove
          </button>
        </td>
        <td>
          {this.state.editMode ? (
            <button class="btn" onClick={this.onUpdatePost}>
              Save
            </button>
          ) : (
            <button class="btn" onClick={this.onEditPost}>
              Edit
            </button>
          )}
        </td>
      </tr>
    );
  }
}
