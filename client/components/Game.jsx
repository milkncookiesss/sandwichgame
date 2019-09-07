import HighScores from "./HighScores.jsx";
import Sandwich from "./SandwichComponent.jsx";
import Container from "react-bootstrap/Container";
import React from "react";
import axios from "axios";

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      score: 0
    }
  }

  componentDidMount() {
    this.setState({
      userName: this.props.username
    })
    axios.get('/api/user', {params: {username: this.props.username}})
    .then((res) => {
      this.setState({
        score: res.data.totalScore
      })
    })
  }

  pressSandwich = () => {
    axios.post('/api/user', {
      params: {
        username: this.state.userName,
        score: this.state.score + 10
      }
    })
    .then((res) => {
      this.setState({
        score: res.data.totalScore
      })
    })
  }

  render() {
    return (
      <div className="d-flex">
        <div className="p-2 flex-fill">
          {this.state.score}
        </div>
        <div className="p-2 flex-fill align-self-center">
          <Container>
            <button onMouseDown={this.pressSandwich}>
              click this button maybe
            </button>
          </Container>
        </div>
        <div className="p-2 flex-fill">
          <Container>
            <HighScores />
          </Container>
        </div>
      </div>
    )
  }
}

export default Game;