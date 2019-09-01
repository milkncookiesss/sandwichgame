import React from "react";

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      score: 0
    }
  }

  render() {
    return (
      <div>
        <h1>
          Game Here
        </h1>
      </div>
    )
  }
}

export default Game;