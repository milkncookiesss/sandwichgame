const { user } = require('../Database/models.js');
//export controllers
module.exports = {
  getUserScore: (req, res) => {
    let { username } = req.body;
    user.find({username: username})
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((err) => {
        res.status(500).send(err);
      })
  },
  getAllScores: (req, res) => {
    user.find()
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((err) => {
        res.status(500).send(err);
      })
  },
  postUserScore: (req, res) => {
    let { username, score } = req.body;
    user.findOneAndUpdate({username: username}, {score: score}, (err, response) => {
      if (err) {
        return err;
      } else {
        res.send(response);
      }
    });
  },
  postNewUser: (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    let doesExist = user.findOne({username: username});
    console.log(doesExist);
      new user({
        username: username,
        password: password,
        totalScore: 0
      })
      .save()
      .then(() => {
        res.status(200).send('created user');
      })
      .catch((err) => {
        res.status(400).send(err);
      })
    //check if username already exists
      //if exists tell them to login
      //else save username
    
  }
};