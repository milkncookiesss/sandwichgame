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
    console.log(req.body);
    res.send('hey we got the store');
  },
  postNewUser: (req, res) => {
    const { username, password } = req.body;
    user.save(username, password)
    
  }
};