const { user } = require('../Database/models.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = {
  //get user's score
  getUserScore: (req, res) => {
    let { username } = req.query;
    // console.log('the user ', req.query);
    user.findOne({username: username})
      .then((response) => {
        console.log(response);
        res.status(200).send(response);
      })
      .catch((err) => {
        res.status(500).send(err);
      })
  },
  //get every users' scores
  getAllScores: (req, res) => {
    user.find().limit(10).sort({totalScore: -1})
      .then((response) => {
        console.log(response);
        res.status(200).send(response);
      })
      .catch((err) => {
        res.status(500).send(err);
      })
  },
  //update user's score
  postUserScore: (req, res) => {
    let { username, score } = req.body.params;
    console.log('the stuff ', req);
    user.findOneAndUpdate({username: username}, {totalScore: score}, (err, response) => {
      if (err) {
        return err;
      } else {
        res.status(200).send(response);
      }
    });
  },
  //creating new user with encryption
  postNewUser: (req, res) => {
    const { username, password } = req.body;
    let passwordHash = bcrypt.hashSync(password, saltRounds);
    user.exists({username: username})
      .then((doc) => {
        if (!!doc === false) {
          new user({
            username: username,
            password: passwordHash,
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
  },
  //user log in with bcrypt comparison
  getUserLogin: (req, res) => {
    let { username, password } = req.body;
    user.findOne({username: username})
      .then((doc) => {
        let result = bcrypt.compareSync(password, doc.password);
        if (result) {
          res.status(200).send(result);
        } else {
          res.status(409).send('wrong password');
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      })
  }
};