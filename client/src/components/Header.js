import React from 'react';
import { Link } from 'react-router-dom'




const Header = (props) => {
    return (
        <nav>
            <Link to={'/friends'}><li>Protected</li></Link>
            <Link to={'/login'}><li>Login/logout</li></Link>
            <Link to={'/addfriend'}><li>Add Friend</li></Link><link />
        </nav>
    );
}

export default Header;