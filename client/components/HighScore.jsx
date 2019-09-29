import React from 'react';
import "../styles/styles.css";
import Table from "react-bootstrap/Table";

const HighScore = (props) => {
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
  )
}

export default HighScore;