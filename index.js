import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      posts: [],
    };
  }

  componentWillMount() {
    CallumAPI.all().then((posts) => {
      console.log(posts);

      this.setState({ posts });
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <ul>
        <li>{posts.email}</li>
      </ul>
    );
  }
}

import axios from 'axios';

const CallumAPI = {
  posts: [],
  all: function () {
    //return axios.get('https://jsonplaceholder.typicode.com/users')
    return axios.get('https://reqres.in/api/users/3').then((res) => {
      // console.log(typeof res);
      this.posts = res.data;
      return this.posts.data;
    });
  },
};

export default CallumAPI;

render(<App />, document.getElementById('root'));
