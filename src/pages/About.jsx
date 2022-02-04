import React from "react";
import "../styles/About.css";
import { resumeData } from "../resumeData,";

export default function About() {
	return (
		<div id="about" className="about-container">
			<div className="about-wrapper">
				<h1>About me!</h1>
				<br />
				<h2>{resumeData.about}</h2>
				<div className="languages-container">
					<h3>My knowledge stack:</h3>
					<div className="languages">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
							alt="javascript"
							title="JavaScript"
						/>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
							alt="typescript"
							title="TypeScript"
						/>

						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
							alt="react"
							title="React"
						/>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
							alt="redux"
							title="Redux"
						/>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
							alt="nodejs"
							title="NodeJS"
						/>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
							alt="express"
							title="Express"
						/>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
							alt="html"
							title="HTML5"
						/>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
							alt="css3"
							title="CSS3"
						/>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
							alt="postgresql"
							title="PostgreSQL"
						/>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg"
							alt="sequelize"
							title="Sequelize"
						/>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
							alt="git"
							title="Git"
						/>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
							alt="nextjs"
							title="NextJS"
						/>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
							alt="sass"
							title="SaSS"
						/>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
							alt="tailwind"
							title="Tailwind"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
