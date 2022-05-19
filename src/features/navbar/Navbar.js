import React from 'react';
import {Link} from 'react-router-dom'
// import '../../assets/css/styles'
const Navbar = () => {
    return (
        <div className="navbar">
            <ul className=""> 
                <li className="">
                    <Link to="/">Home</Link>
                </li>
                <li >
                    <Link to="/">About</Link>
                </li>
                <li >
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;