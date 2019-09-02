import React from 'react';

const HighScore = (props) => {
  console.log('the props ', props);
  return (
    <div>
      <h1>
      #{props.id + 1} {props.username}
      </h1>
      {props.score}
    </div>
  )
}

export default HighScore;