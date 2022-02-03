import React from "react";
import "../styles/Navbar.css";
import test from "../images/test.png";

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="image">
				<a href="#Home">
					<img src={test} alt="profilepic" />
				</a>
				<h3>Lighuen Miranda</h3>
			</div>
			<a href="#Home">Home</a>

			<a href="#about">About</a>

			<a href="#portfolio">Portfolio</a>
		</nav>
	);
}
