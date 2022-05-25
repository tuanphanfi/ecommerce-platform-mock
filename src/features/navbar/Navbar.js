import React from 'react';
import { Link } from 'react-router-dom'
import Cart from '../../pages/components/cart/Cart'

// import '../../assets/css/styles'
const Navbar = () => {
    return (
        <div className="navbar ">
            {/* logo */}
            <div className="navbar-logo d-flex align-items-center">
                <img src="data:image/jpeg;base64,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" alt="" />
                <h4>Rooftop & Chill</h4>
            </div>



            {/* navigation */}
            <ul className="links d-flex justify-content-center align-items-center">
                <li className="">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Menu</Link>
                </li>
                <li>
                    <Link to="/">Order</Link>
                </li>
                <li >
                    <Link to="/">About</Link>
                </li>
                <li >
                    <Link to="/">Contact</Link>
                </li>
            </ul>

            {/* cart */}
            <Cart />
        </div>
    );
};

export default Navbar;