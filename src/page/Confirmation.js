import React from 'react';
//import { useLocation } from 'react-router-dom';

function Confirmation(props) {
  return (
    <div>
      <h2>Form Submitted Successfully!</h2>
      <p>{props.name}</p>
    </div>
  );
}

export default Confirmation;