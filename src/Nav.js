import React from 'react';
import './Nav.css'
import { Link } from "react-router-dom";




const Navbar = () => {


    return (
        <>
        <header className="header_sticky">
            <h1>Portfolio</h1>
            <div className="list">
            <ul>
                <li className="active"><Link to="/home" className="link" >Home</Link> </li>
                <li><Link to="/skills" className="link" >Skills</Link></li>
                <li><Link to="/Portfolio" className="link" >Portfolio</Link> </li>
                <li><Link to="/contact" className="link" >Contact</Link> </li>
            </ul>

        </div>
        </header>
        </>
    )
}
export default Navbar;