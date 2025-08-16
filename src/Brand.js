import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';


function Brand() {
  
    const [brandName, setBrandName] = useState('');

    const registerUser = (event) =>{
        event.preventDefault();
        alert();
    };
 
    return (

    <form onSubmit={registerUser}>

    <div className="Brand" class="container-fluid p-3  text-white text-center">
       
      
      <div class="container mt-2">
         <div class="row">
            
            <div class="col-sm-1">
            </div>
            
            <div class="col-sm-10">
               <form>
                  <p><h3 class="text-dark text-start">Basic Information</h3></p>
                  <div class="mb-2 ">
                     <input type="text" class="form-control" placeholder="Brand Name / Shop Name" name={brandName} onChange={(e)=>setBrandName(e.target.value)}/>
                  </div>
                  <div class="mb-2">
                     <input type="text" class="form-control" placeholder="Owner Full Name" name="pswd"/>
                  </div>
                  <div class="mb-2">
                     <input type="text" class="form-control" placeholder="Mobile Number" name="pswd"/>
                  </div>
                  <div class="mb-2">
                     <input type="text" class="form-control" placeholder="Business Type" name="pswd"/>
                  </div>
                  <div class="mb-2">
                     <input type="text" class="form-control" placeholder="Retailer Category" name="pswd"/>
                  </div>
                  <h3 class="text-dark text-start">Address Proof</h3>
                  <div class="mb-2">
                     <input type="text" class="form-control" placeholder="Full Shop Address" name="email"/>
                  </div>
                  <div class="mb-2">
                     <input type="text" class="form-control" placeholder="State & District" name="pswd"/>
                  </div>
                  <div class="mb-2">
                     <input type="text" class="form-control" placeholder="Upload Address Proof" name="pswd"/>
                  </div>
                  <h3 class="text-dark text-start">Tax & Regulatory</h3>
                  <div class="mb-2">
                     <input type="text" class="form-control" placeholder="GSTIN (optional)" name="email"/>
                  </div>
                  <div class="mb-2">
                     <input type="text" class="form-control" placeholder="FSSAI Number" name="pswd"/>
                  </div>
                  <h3 class="text-dark text-start">Documents to Upload</h3>
                  <div class="mb-2">
                     <input type="file" class="form-control" placeholder="Upload Shop photo" name="email"/>
                  </div>
                  <div class="mb-2">
                     <input type="file" class="form-control" placeholder="Upload Owner ID Proof" name="pswd"/>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
               </form>
            </div>
            
            <div class="col-sm-1">
            </div>

         </div>
      </div>
    </div>
    </form>
  );
}

export default Brand;
