import React from "react";
import {NaviLink} from 'react-router-dom';

export default function Header(){
    return (
        <div>
            <nav className="navbar-dark">
            <div className="navbar-fluid">
            <div className="navbar-header">
            <navLink className="navbar-brand" to="/home">
                My website
            </navLink>
            </div>
            <ol className="nav"></ol>
            <li className="active">
                <NavLink className="active" to="/home">Home</NavLink>
            </li>
            <li className="active" 
            </div>
            </nav>
        </div>
    )
}