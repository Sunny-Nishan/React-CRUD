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
      postList: []
    };
  }
  onCreateOrUpdatePost = post => {
    if(post.postId){
      let updateIndex = 0;
      this.state.postList.forEach((p,i) => {
        if(p.postId === post.postId){
          updateIndex = i;
        }
      });
      this.state.postList.splice(updateIndex, 1, post);
      this.setState({
        editId: undefined
      })  
    }else{
      postId++;
      this.state.postList.push({ ...post, postId });
    }
    this.setState(prevState => ({
      postList: this.state.postList
    }));
    
  };
  onRemovePost = id => {
    let newPostList = this.state.postList.filter(post => {
      return post !== id;
    });
    this.setState({
      postList: newPostList
    });
  };
  onEditPost = (id) => {
    this.setState({
      editId: id
    })
  }
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
          onEditPost={this.onEditPost}
          onUpdatePost={this.onCreateOrUpdatePost}
        />
        <AddPost editPost={this.state.postList.filter(post =>{    
            return post.postId === this.state.editId
        })[0]} handleSubmit={this.onCreateOrUpdatePost} />
      </div>
    );
  }
}

export default App;
