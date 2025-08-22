import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


function Dashboard() {



    return (

        <form>

            <div className="dashboard">

                <div class="col-sm-3" style={{ backgroundColor: 'yellow' }}>
                </div>

                <div class="sidebar col-sm-6">
                    <h2>My Dashboard</h2>
                    <a href="/">Home</a>
                    <a href="/brand">Brand</a>
                    <a href="/distributor">Distributor</a>
                    <a href="/retailer">Retailer</a>
                    <a href="/">Logout</a>           
                </div>

                <div class="col-sm-3">
                </div>

            </div>




        </form>
    );
}

export default Dashboard;