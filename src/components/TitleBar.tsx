import { NavLink } from "react-router-dom";
import "./TitleBar.css";

function TitleBar() {
	return (
		<nav className="titlebar">
			<NavLink to="/" className="titleName">
				JERRY JU
			</NavLink>

			<ul className="navList">
				<NavLink to="/projects">PROJECTS</NavLink>
				<NavLink to="/experience">EXPERIENCE</NavLink>
				<NavLink to="/contact">CONTACT</NavLink>
			</ul>
		</nav>
	);
}

export default TitleBar;
