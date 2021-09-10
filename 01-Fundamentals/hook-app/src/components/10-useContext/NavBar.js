import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
	return (
		<nav className="nav">
			<a className="nav-link" aria-current="page">Use Context</a>
			<NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
			<NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink>
			<NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
	  </nav>
	)
}
