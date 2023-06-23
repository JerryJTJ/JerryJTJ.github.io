/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import profilePic from "../media/profilepic.jpg";
import "./Home.css";

function Home() {
	return (
		<div className="container">
			<img
				className="profile-pic"
				src={profilePic}
				alt="Profile Picture"
			/>
			<div className="bio">
				<h1>👋 Hey!</h1>
				<p>
					Welcome to my website! I'm a recent University of Waterloo
					grad with a B.A.Sc. degree in Mechatronics
					Engineering/Computing Option.
					<br></br>
					<br></br>
					I'll post my projects, experiences, and other random stuff
					here so keep an eye out and thanks for visiting!
				</p>
			</div>
		</div>
	);
}

export default Home;
