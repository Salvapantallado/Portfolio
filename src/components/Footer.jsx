import React from "react";
import "../styles/Footer.css";

export default function Footer() {
	return (
		<div className="footer-container">
			<div className="footer">
				<h2>Contact me:</h2>
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
			</div>
			<div>
				<h3>Lighuen Miranda's Website</h3>
			</div>
		</div>
	);
}
