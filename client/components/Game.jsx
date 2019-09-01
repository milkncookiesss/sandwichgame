import HighScores from "./HighScores.jsx";
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

  render() {
    return (
      <div>
        <h1>
          Game Here
        </h1>
        <div>
          {this.state.score}
        </div>
        <div>
          <HighScores />
        </div>
      </div>
    )
  }
}

export default Game;