import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';



function Brand() {

    const [brandName, setBrandName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [statusMessage, setStatusMessage] = useState('');



    const handleSubmit = async (event) => {

        event.preventDefault();

        const inputData = {
            manufaturerName: 'Lalitha',
            contactNumber: '9176776027',
            emailAddress: 'lalithapach@gmail.com',
            postalCode: '600127',
            state: 'tamilnadu',
            city: 'chennai'
        }



        try {

            const response = await fetch('http://localhost:8081/brand', {
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

            alert("Brand Information Saved Successfull!...");

            console.log(json);

        } catch (error) {

        } finally {

        }
    }

    return (


        <div class="main col-sm-9">
            <form onSubmit={handleSubmit}>
                <h3 class="text-dark text-start">Brand Information</h3>
               
                <div class="mb-2 ">
                    <input type="text" class="form-control" placeholder="Manufacturer Name - as per GST or TIN"
                        name={brandName} onChange={(e) => setBrandName(e.target.value)} />
                </div>
                <div class="mb-2">
                    <input type="text" class="form-control" placeholder="Contact No - Business/Watsapp"
                        name={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                </div>
                <div class="mb-2">
                    <input type="text" class="form-control" placeholder="Email Address"
                        name={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
                </div>
                <div class="mb-2">
                    <input type="text" class="form-control" placeholder="Postal Code"
                        name={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                </div>
                <div class="mb-2">
                    <input type="text" class="form-control" placeholder="State"
                        name={state} onChange={(e) => setState(e.target.value)} />
                </div>
                <div class="mb-2">
                    <input type="text" class="form-control" placeholder="City"
                        name={city} onChange={(e) => setCity(e.target.value)} />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
                {setStatusMessage}
            </form>
        </div>
           
        
  
        


    );
}

export default Brand;