import { NavLink } from "react-router-dom";
import "./TitleBar.css";

function TitleBar() {
	return (
		<nav className="titlebar">
			<NavLink to="/" className="title-link">
				JERRY JU
			</NavLink>

			<ul className="navList">
				<NavLink className="nav-link" to="/projects">
					PROJECTS
				</NavLink>
				<NavLink className="nav-link" to="/experience">
					EXPERIENCE
				</NavLink>
				<NavLink className="nav-link" to="/contact">
					CONTACT
				</NavLink>
			</ul>
		</nav>
	);
}

export default TitleBar;
