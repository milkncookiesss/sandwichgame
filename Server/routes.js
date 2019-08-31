const router = require('express').Router();
const {getUserScore, getAllScores, postUserScore, postNewUser} = require('./controllers.js');

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



//export routes
module.exports = router;