import React, { useState } from 'react';
import { useSubmit, useNavigate , Form} from 'react-router-dom';
import Confirmation from './Confirmation';

function FormComponent() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
   // navigate('/confirmation')
   return (<h1>Form submitted successfully.......................</h1>);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

export default FormComponent;
