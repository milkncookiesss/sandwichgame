import axios from "axios";
import React from "react";
import Game from "./Game.jsx";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
      registered: false
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/login', {
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
    let loggedin = this.state.isLoggedIn;
    if (loggedin === true) {
      return <Game username={this.state.username}/>
    } else if (this.state.registered === true) {
      return <Register />
    } else {
      return (
        <Container className="d-flex justify-content-center">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                Username
              </Form.Label>
                <Form.Control name="username" type="text" placeholder="username" value={this.state.username} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>
                Password
              </Form.Label>
                <Form.Control type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
            </Form.Group>
            <Button variant="primary"  onSubmit={(e) => this.onSubmit(e)} onClick={(e) => this.onSubmit(e)}>click this</Button>
          </Form>
        </Container>
      )
    }
  }
}

export default App;