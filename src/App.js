import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
let postId = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: {}
    };
  }
  onCreateOrUpdatePost = post => {
    let newPostList = {};
    if (post.postId) {
      newPostList = { ...this.state.postList, [post.postId]:{...post} };
      this.setState({
        postList: newPostList,
      });
    } else {
      postId++;
      newPostList = { ...this.state.postList, [postId] : { ...post, postId} };
    }

    this.setState(prevState => ({
      postList: newPostList
    }));
  };
  onRemovePost = id => {
    let newPostList = {...this.state.postList};
    delete newPostList[id];
    this.setState({
      postList: newPostList
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Share Your views</h1>
        </header>
        <p className="App-intro">Post Your Views Below</p>
        <PostList
          postList={this.state.postList}
          onRemovePost={this.onRemovePost}
          onUpdatePost={this.onCreateOrUpdatePost}
        />
        <AddPost
          handleSubmit={this.onCreateOrUpdatePost}
        />
      </div>
    );
  }
}

export default App;
