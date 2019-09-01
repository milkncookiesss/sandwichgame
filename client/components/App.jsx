import axios from 'axios';
import React from "react";
import Game from "./Game.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then((res) => {
      this.setState({
        isLoggedIn: res.data
      });
    })
    this.setState({
      username: '',
      password: ''
    })
    console.log(this.state);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    e.preventDefault();
    // console.log(this.state)
  }

  loginRender = () => {
    if (!this.state.loggedIn) {
      return 
    }
  }

  render() {
    let loggedin = this.state.isLoggedIn;
    if (loggedin === true) {
      return <Game />
    } else {
      return (
      <div>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <label>
            username:
            <input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            password:
            <input type="password" name="password" type="text" value={this.state.password} onChange={this.handleChange} />
          </label>
          <button onClick={(e) => this.onSubmit(e)}>click this</button>
        </form>
      </div>
      )
    }
  }
}

export default App;