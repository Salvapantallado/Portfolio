import React from "react";
import "../styles/Footer.css";

export default function Footer() {
	return (
		<div className="footer-container">
			<div className="footer">
				<h2>You can find me in:</h2>
				<a
					href="https://www.linkedin.com/in/lighuen-miranda/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
						alt="linkedin"
					/>
				</a>
				<a
					href="https://walink.co/156dba"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://es.logodownload.org/wp-content/uploads/2018/10/whatsapp-logo-11-1019x1024.png"
						alt="wsp"
					/>
				</a>
				<a 
					href="https://github.com/Salvapantallado"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
						alt="github"
					/>
				</a>
			</div>

			<h3>Email: lighu.miranda@gmail.com</h3>
		</div>
	);
}
