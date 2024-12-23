import "./Card.css";

export enum CardType {
	JOB,
	PROJECT,
}

interface cardProps {
	type: CardType;
	title?: string;
	role?: string;
	location?: string;
	date?: string;
	description?: string;
	image?: string;
	link?: string;
	technologies?: string;
}

function Card(props: cardProps) {
	return (
		<div className={"card"}>
			<div className={"cardRow"}>
				{props.type === CardType.JOB ? (
					<div className={""}>
						<img
							className={"cardImage"}
							src={props.image}
							alt={props.title}
						/>
					</div>
				) : null}
				<div className={"cardContent"}>
					{props.title && <p className="title">{props.title}</p>}
					{props.role && <p className="role">{props.role}</p>}
					{props.description && (
						<p className="description">{props.description}</p>
					)}
					{props.technologies && (
						<p className="technologies">
							Tech Stack: {props.technologies}
						</p>
					)}
				</div>
				<div className={"sideContainer"}>
					{props.link && (
						<p className="link">
							<a href={props.link}>🔗</a>
						</p>
					)}
					{props.date && <p className={"date"}>{props.date}</p>}
					{props.location && (
						<p className={"location"}>{props.location}</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default Card;
