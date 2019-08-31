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
    user.exists({username: username})
      .then((doc) => {
        if (!!doc === false) {
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
            res.status(500).send(err);
          })
        } else {
          res.status(302).send('user exists');
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};