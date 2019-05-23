import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostData from '../src/dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: PostData
    }
  }

  render() {
    return(
      <div className='App'>
        <SearchBar />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
