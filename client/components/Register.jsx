import React from 'react';
import axios from 'axios';
import Game from "./Game.jsx";
import "../styles/styles.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      validated: false
    }
  }

  error = () => {
    if (this.state.username === "" || this.state.password === "") {
      return (
        <div>
          fill out the fields
        </div>
      )
    }
    if (this.state.validated) {
      return( 
        <div>
          hey this user exists
        </div>
      )
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
        validated: true,
      });
    })
    .catch((err) => {
      if (err) {
        this.setState({
          error: true
        })
      }
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    e.preventDefault();
  }

  render() {
    if (this.state.validated === true) {
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
              <Form noValidate validated={this.state.validated} onSubmit={(e) => this.onSubmit(e)}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    Username
                  </Form.Label>
                    <Form.Control name="username" type="text" placeholder="username" required value={this.state.username} onChange={this.handleChange} />
                    <Form.Control.Feedback type="invalid">Please enter an username</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>
                    Password
                  </Form.Label>
                    <Form.Control type="password" name="password" placeholder="password" required value={this.state.password} onChange={this.handleChange} />
                    <Form.Control.Feedback type="invalid">Please enter a password</Form.Control.Feedback>
                </Form.Group>
                <Container className="d-flex justify-content-center">
                <Button variant="primary" className="some-pad" type="submit" onClick={(e) => this.onSubmit(e)}>Register</Button>
                <Button variant="secondary" onClick={() => {this.props.register(false)}}>Login?</Button>
                </Container>
                {this.error()}
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