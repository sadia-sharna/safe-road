import React from 'react';
import { Link } from 'react-router-dom';
export function SideNav() {
    return <nav>
        <Link to="/home">Home</Link>{" "}
        <Link to="/login">Login</Link>
    </nav>;
}
