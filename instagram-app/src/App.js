import React from 'react';
import Authenticate from './components/Authentication/Authenticate';
import PostsPage from './components/PostsPage/PostsPage';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  componentDidMount() {
    //Need to look up
    const user = localStorage.getItem('user');
    this.setState({ username: user });
  }

  render() {
    return(
      <div className='App'>
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);