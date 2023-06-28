import { Link } from "react-router-dom";
import "./NotFound.css";

interface NotFoundProps {
	onTabClick: (tabName: string) => void;
}

function NotFound({ onTabClick }: NotFoundProps) {
	return (
		<div className="NotFound-container">
			<div className="notfound-content">
				<h1 className="notfound-header">
					Sorry, this page doesn't exist!
				</h1>
				<br />
				<Link
					to="/"
					className="titleName"
					onClick={() => onTabClick("home")}
				>
					<text className="notfound-returnText">
						Click to return home.
					</text>
				</Link>
			</div>
		</div>
	);
}

export default NotFound;
