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
                <div className="d-flex justify-content-center">
                <Button variant="primary" onClick={(e) => this.onSubmit(e)}>click this</Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
        <div>
          <p> register? </p>
        </div>
      </div>
    )
  }
}

export default Register;