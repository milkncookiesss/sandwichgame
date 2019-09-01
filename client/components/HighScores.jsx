import React from 'react';
import axios from 'axios';
import HighScore from './HighScore.jsx';

class HighScores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highscores: []
    }
  }

  componentDidMount() {
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
        {this.state.highscores.map((score, index) => {
          return <HighScore username={score.username} score={score.totalScore} key={index}/>
        })}
      </div>
    )
  }
}

export default HighScores;