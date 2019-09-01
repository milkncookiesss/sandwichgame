import React from 'react';
import axios from 'axios';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/newuser', {
        username: this.state.username,
        password: this.state.password
      }
    )
    .then((res) => {
      this.setState({
        isLoggedIn: res.data
      });
    })
    console.log(this.state);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>
          New User Registration
        </h1>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <label>
            username:
            <input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <button onClick={(e) => this.onSubmit(e)}>click this</button>
        </form>
      </div>
    )
  }
}

export default Register;