import React from 'react';
import axios from 'axios';
import "../styles/styles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HighScore from './HighScore.jsx';
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

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
        <Container className="d-flex">
          <h1>
            High Scores
          </h1>
            <Table striped bordered hover variant="dark" responsive size="sm">
              <thread>
                <tr>
                  <th className="col-sm-4">#</th>
                  <th className="col-sm-4">Username</th>
                  <th className="col-sm-4">Scores</th>
                </tr>
              </thread>
                <tbody>
                  {this.state.highscores.map((score, index) => {
                    return <tr><HighScore username={score.username} score={score.totalScore} key={index} id={index}/></tr>
                  })}
                </tbody>
              </Table>
        </Container>
    )
  }
}

export default HighScores;