import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar=()=>{
    return (    
        <div className='navBar'>
            <div className='home'>
                <Link to="/">Home</Link>
            </div>
            <div className='technology'>
                <Link to="/technology">Technology</Link>
        </div>
            <div className='cart'>
                <Link to="/cart">Cart</Link>
            </div>
        </div>
    )

}

export default Navbar;