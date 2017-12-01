import React from "react";
export default class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const post = {
      title: e.target.title.value,
      content: e.target.content.value
    };
    this.props.handleSubmit(post);
    this.setState({
      title: "",
      content: ""
    });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>Post Title</div>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />

          <div>Post Content</div>
          <textarea
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
