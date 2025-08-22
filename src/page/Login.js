import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Login() {
  
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const validateUser = (event) =>{
        event.preventDefault();
        alert("Your entered phone number is => "+phoneNumber);    
        navigate("/dashboard");   
    };                                             
           
    return (           

    <form onSubmit={validateUser}>

    <div className="Brand" class="container-fluid p-3  text-white text-center">
       
      <div class="container mt-2">
        <div class = "row">

        </div>        
                 
        <div class="row">
            
            <div class="col-sm-1">
            </div>           
            
            <div class="col-sm-10">
                  <p><h3 class="text-dark text-start">Login</h3></p>
                  <div class="mb-2 ">
                     <input type="text" class="form-control" placeholder="Phone Number" name={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
                  </div>
         
                  <button type="submit" class="btn btn-primary">Submit</button>

            </div>
            
            <div class="col-sm-1">
            </div>

         </div>
      </div>
    </div>
    </form>
  );
}

export default Login;