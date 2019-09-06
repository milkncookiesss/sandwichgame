import React from 'react';
import "../styles/styles.css";
import Table from "react-bootstrap/Table";

const HighScore = (props) => {
  console.log('the props ', props);
  return (
    <tr>
      <td>
        {props.id + 1}    
      </td>
      <td>
        {props.username}
      </td>
      <td>
        {props.score}
      </td>
    </tr>
    // <div>
    //   <h1>
    //   #{props.id + 1} {props.username}
    //   </h1>
    //   {props.score}
    // </div>
  )
}

export default HighScore;