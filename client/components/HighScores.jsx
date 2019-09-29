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
    }, 3000)
  }

  render() {
    return(
      <div>
        {/* <Row> */}
          <h1>
            High Scores:
          </h1>
        {/* <Col xs={4} className="d-flex"> */}
            <Table bordered hover variant="dark" size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Scores</th>
                </tr>
              </thead>
                <tbody>
                  {this.state.highscores.map((score, index) => {
                    return<HighScore username={score.username} score={score.totalScore} key={index} id={index}/>
                  })}
                </tbody>
              </Table>
        {/* </Col> */}
                    {/* </Row> */}
      </div>
    )
  }
}

export default HighScores;