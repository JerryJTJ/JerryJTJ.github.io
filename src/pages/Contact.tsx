import "./Contact.css";

function Contact() {
	return (
		<div className="contact-container">
			<div className="contacts">
				<p>
					📧&nbsp;
					<a
						className="contact-link"
						href="mailto:jerryjtj@gmail.com"
					>
						JerryJTJ@gmail.com
					</a>
					<br></br>
				</p>
				<p>
					💼&nbsp;
					<a
						className="contact-link"
						href="https://ca.linkedin.com/in/jujerry"
					>
						linkedin.com/in/jujerry
					</a>
				</p>
				<p>
					💻&nbsp;
					<a
						className="contact-link"
						href="https://github.com/JerryJTJ"
					>
						github.com/JerryJTJ
					</a>
				</p>
				{/* <p>
					📷&nbsp;
					<a
						className="contact-link"
						href="https://www.instagram.com/jerryjtj/"
					>
						instagram.com/JerryJTJ
					</a>
				</p> */}
			</div>
		</div>
	);
}

export default Contact;
