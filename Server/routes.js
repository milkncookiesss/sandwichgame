const router = require('express').Router();
const {getUserScore, getAllScores, postUserScore, postNewUser, getUserLogin} = require('./controllers.js');

router
  .route('/api')
    .get(getAllScores);
    
router
  .route('/api/user')
    .get(getUserScore)
    .post(postUserScore);

router
  .route('/api/newuser')
  .post(postNewUser);

router
  .route('/api/login')
  .post(getUserLogin);


//export routes
module.exports = router;