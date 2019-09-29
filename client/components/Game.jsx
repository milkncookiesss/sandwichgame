import React from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import HighScores from "./HighScores.jsx";
import Sandwich from "./SandwichComponent.jsx";
import Container from "react-bootstrap/Container";

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      score: 0
    }
  }

  /*
  add bonus round function
  figure out media queries

  */

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
    .catch((err) => {
      console.error(err);
    })
    clearInterval(this.updateScoreInterval());
  }

  updateScoreInterval = () => {
    setInterval(() => {
      axios.post('/api/user', {
        params: {
          username: this.state.userName,
          score: this.state.score
        }
      })
    }, 3500)
  }

  pressSandwich = () => {
    this.setState({
      score: this.state.score + 10
    })
  }

  render() {
    return (
      <Container>
      <Row>
        <Col>
          <h1>
            Score: {this.state.score}
          </h1>
        </Col>
        <Col md={4}>
          <div>
            <Image src="http://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4120.png" width="100%" height="100%" onMouseDown={this.pressSandwich} fluid/>
            <h1>Click dis shit</h1>
          </div>
        </Col>
        <Col>
          <HighScores/>
        </Col>
      </Row>
      </Container>
      // <div className="d-flex">
      //   <h1 className="p-2 flex-fill">
      //     Score: {this.state.score}
      //   </h1>
      //   <div className="p-2 flex-fill align-self-center">
      //     <Row>
      //       <Col md={{ span: 6, offset: 3}}>
      //         <h2>Click Me</h2>
      //       </Col>
      //     </Row>
      //     <Row>
      //       <Col md={{ span: 6, offset: 3 }}>
      //         <p className="float-text">+10</p>
      //       </Col>
      //     </Row>
      //   </div>
      //   <div className="p-2 flex-fill">
      //     <Container>
      //       <HighScores />
      //     </Container>
      //   </div>
      // </div>
    )
  }
}

export default Game;