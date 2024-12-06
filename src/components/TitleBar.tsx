import React from "react";
import { Link } from "react-router-dom";
import "./TitleBar.css";

interface TitleBarProps {
	activeTab: string;
	onTabClick: (tabName: string) => void;
}

//Add "about" to navigationList when finished page
const navigationList = ["projects", "experience", "contact"];

function TitleBar({ activeTab, onTabClick }: TitleBarProps) {
	return (
		<nav className="titlebar">
			<Link
				to="/"
				className="titleName"
				onClick={() => onTabClick("home")}
			>
				<text className="titleNameText">JERRY JU</text>
			</Link>

			<ul className="navList">
				{navigationList.map((navItem) => (
					<Link
						to={`/${navItem}`}
						className={`navLinks ${
							activeTab === navItem && "active"
						}`}
						onClick={() => onTabClick(navItem)}
					>
						<text className="navLinkText">
							{navItem.toUpperCase()}
						</text>
					</Link>
				))}
			</ul>
		</nav>
	);
}

export default TitleBar;
