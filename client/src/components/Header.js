import React from 'react';
import { Link } from 'react-router-dom'




const Header = (props) => {
    return (
        <nav>
            <Link to={'/friends'}><li>Protected</li></Link>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/login'}><li>Login</li></Link>
            <Link to={'/addfriend'}><li>add friend</li></Link><link />
        </nav>
    );
}

export default Header;