import React from "react";
import "../styles/Slider.css";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Slider() {
	return (
		<div>
			<Navbar />
			<div className="outer-wrapper">
				<div className="wrapper">
					<Home />
					<About />
					<Projects />
				</div>
			</div>
			<Footer />
		</div>
	);
}
