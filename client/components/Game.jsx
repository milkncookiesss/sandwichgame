import HighScores from "./HighScores.jsx";
import Sandwich from "./SandwichComponent.jsx";
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
      <div>
        <div>
          {this.state.score}
        </div>
        <div>
          <HighScores />
        </div>
        <div>
          <button onMouseDown={this.pressSandwich}>
            click this button maybe
          </button>
        </div>
      </div>
    )
  }
}

export default Game;