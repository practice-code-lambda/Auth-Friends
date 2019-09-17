import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <ul>
            <Link to={'/friends'}><a>Protected</a></Link>
            <Link to={'/'}><a>Home</a></Link>
            <Link to={'/login'}><a>Login</a></Link>
        </ul>
    );
}

export default Header;