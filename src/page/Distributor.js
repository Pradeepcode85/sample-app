import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';


function Distributor() {


   const handleSubmit = async (event) => {

        event.preventDefault();

        const inputData = {
            distributorName: 'Lalitha',
            contactNumber: '9176776027',
            emailAddress: 'lalithapach@gmail.com',
            postalCode: '600127',
            state: 'tamilnadu',
            city: 'chennai'
        }



        try {

            const response = await fetch('http://localhost:8081/distributor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputData)
            });
         
            if (!response.ok) {
                throw new Error(`Http error! status:":${response.status}`);
            }

            const json = await response.json();

            console.log(json);

        } catch (error) {

        } finally {

        }
    }


   return (


      <div class="main col-sm-9">
          <form onSubmit={handleSubmit}>
            <h3 class="text-dark text-start">Distributor Information</h3>
            <div class="mb-2 ">
               <input type="text" class="form-control" placeholder="Distributor Name" name="email" />
            </div>
            <div class="mb-2">
               <input type="text" class="form-control" placeholder="Contact No - Business/Watsapp" name="pswd" />
            </div>
            <div class="mb-2">
               <input type="text" class="form-control" placeholder="Email Address" name="pswd" />
            </div>
            <div class="mb-2">
               <input type="text" class="form-control" placeholder="Postal Code" name="pswd" />
            </div>
            <div class="mb-2">
               <input type="text" class="form-control" placeholder="State" name="pswd" />
            </div>
            <div class="mb-2">
               <input type="text" class="form-control" placeholder="City" name="pswd" />
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
         </form>
      </div>


   );
}


export default Distributor;