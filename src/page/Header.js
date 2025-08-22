import React from 'react';

function Header() {

    return (
        <div class="sidebar col-sm-2">
            <h2>My Dashboard</h2>
            <a href="/home">Home</a>
            <a href="/brand">Brand</a>
            <a href="/distributor">Distributor</a>
            <a href="/retailer">Retailer</a>
            <a href="/">Logout</a>
        </div>
    )
}

export default Header;