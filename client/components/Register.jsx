import React from 'react';
import axios from 'axios';
import Game from "./Game.jsx";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      registered: false
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
        registered: true
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
    if (this.state.registered === true) {
      return <Game username={this.state.username}/>
    }
    return (
      <div>
            <Container className="d-flex justify-content-center my-auto">
              <Row>
                <Col>
                  <h1>
                  Register?
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
                <Button variant="primary" className="some-pad" onClick={(e) => this.onSubmit(e)}>Register</Button>
                <Button variant="secondary" onClick={() => {this.props.register(false)}}>Login?</Button>
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

export default Register;