import axios from "axios";
import React from "react";
import Game from "./Game.jsx";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron"
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
        <div>
            <Jumbotron>
              <Row>
                <Col xs>
              <h1>
              Sandwich Gamez
              </h1>
                </Col>
              </Row>
            </Jumbotron>
          <ul>
          <Col className="col-md-4 col-md-offset-4">
        <Container className="d-flex justify-content-center my-auto align-middle">
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
          </Col>
          </ul>
        {/* // <Container className="d-flex justify-content-center align-middle my-auto">
        //   <Row>
        //       <Col md="auto">
        //       hi hi hi
        //       </Col>
        //   </Row>
        // </Container> */}
      </div>
      )
    }
  }
}

export default App;