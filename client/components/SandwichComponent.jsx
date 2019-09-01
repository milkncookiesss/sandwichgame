import React from 'react';

const Sandwich = (props) => {
  return (
    <div>
      <div>
        <button onMouseDown={() => props.onClick()}>
          hit this sandwich
        </button>
      </div>
      Sandwich here
    </div>
  )
}

export default Sandwich;