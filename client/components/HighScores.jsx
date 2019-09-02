import React from 'react';
import axios from 'axios';
import HighScore from './HighScore.jsx';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/styles.css";

class HighScores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highscores: []
    }
  }

  componentDidMount() {
    axios.get('/api')
    .then((res) => {
      this.setState({
        highscores: res.data
      })
    })
    .catch((err) => {
      console.error(err);
    })
    clearInterval(this.interval());
  }


  interval = () => {
    setInterval(() => {
      axios.get('/api')
    .then((res) => {
      this.setState({
        highscores: res.data
      })
    })
    .catch((err) => {
      console.error(err);
    })
    }, 5000)
  }

  render() {
    return(
      <div>
        <Container className="d-flex">
          <h1>
            High Scores
          </h1>
        </Container>
        <Container className="d-flex">
          <Row>
            <Col>
              <div>
                {this.state.highscores.map((score, index) => {
                  return <HighScore username={score.username} score={score.totalScore} key={index} id={index}/>
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default HighScores;