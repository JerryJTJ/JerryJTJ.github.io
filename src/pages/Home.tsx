/* eslint-disable jsx-a11y/img-redundant-alt */
import profilePic from "../media/profilepic.webp";
import "./Home.css";
import resume from "../media/documents/resume.pdf";

function Home() {
	return (
		//"home-superContainer" is for footer
		<div className="home-superContainer">
			<div className="home-container">
				<img
					className="home-profilePic"
					src={profilePic}
					alt="Profile Picture"
				/>
				<div className="home-bio">
					<h1 className="home-greeting">Hey!</h1>
					<p className="home-bioText">
						Welcome to my website! I'm a UWaterloo graduate with a
						degree in Mechatronics Engineering (w/ Computing
						Option).
						<br></br>
						<br></br>
						I'll post my projects, experiences, and other random
						stuff here so keep an eye out and thanks for visiting!
						<br></br>
						<br></br>
						<a href={resume}>📄 For my resume, click here!</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
