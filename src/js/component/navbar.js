import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/contacts"><h3> Contact List</h3></Link>
			<div className="ml-auto">
				<Link to="/">
					<button className="btn btn-primary">Check the description of the project</button>
				</Link>
			</div>
		</nav>
	);
};






