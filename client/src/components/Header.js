import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <ul>
            <Link><li>Protected</li></Link>
            <Link to={'/friends'}><li>Login</li></Link>
        </ul>
    );
}

export default Header;