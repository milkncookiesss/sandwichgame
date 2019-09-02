import axios from "axios";
import React from "react";
import Game from "./Game.jsx";
import "../styles/styles.css";
import Col from "react-bootstrap/Col"
import Register from "./Register.jsx";
import Row from "react-bootstrap/Row";
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

  register = (bool) => {
    console.log('what do i get here ', bool)
    this.setState({
      registered: bool
    })
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
      return <Register register={this.register} isLoggedIn={this.state.isLoggedIn}/>
    } else {
      return (
        <div>
            <Container className="d-flex justify-content-center my-auto">
              <Row>
                <Col>
                  <h1>
                  Login?
                  </h1>
                </Col>
              </Row>
            </Container>
        <Container className="d-flex justify-content-center my-auto align-middle">
          <Row>
            <Col>
              <Form onSubmit={(e) => this.onSubmit(e)}>
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
                <Container className="d-flex justify-content-center">
                <Button variant="primary" className="some-pad" onClick={(e) => this.onSubmit(e)}>Login</Button>
                <Button variant="secondary" onClick={() => {this.register(true)}}>Register?</Button>
                </Container>
              </Form>
            </Col>
          </Row>
        </Container>
        {/* <Container className="d-flex justify-content-center">
        </Container> */}
      </div>
      )
    }
  }
}

export default App;