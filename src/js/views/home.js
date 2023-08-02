import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Contact list project</h1>

		<p>This project is basically a contact list creator. You can add, delete or edit some data about each one. Hope you enjoy it! </p>

		<Link to="/form"><button type="button" className="btn btn-primary"> Create Contact</button></Link>
	</div>
);



// NO ESTAS TRABAJANDO EN LA MASTER BRANCH, UNE LOS CAMBIOS