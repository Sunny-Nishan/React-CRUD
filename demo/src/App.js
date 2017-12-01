import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import AddPost from './components/AddPost';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Share Your views</h1>
        </header>
        <p className="App-intro">
         Post Your Views Below
        </p>
        <PostList />
      </div>
    );
  }
}

export default App;
