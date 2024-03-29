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

const Card = (props: cardProps) => {
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
					{props.title ? (
						<p className="title">{props.title}</p>
					) : null}
					{props.role ? <p className="role">{props.role}</p> : null}
					{props.description ? (
						<p className="description">{props.description}</p>
					) : null}
					{props.technologies ? (
						<p className="technologies">
							Tech Stack: {props.technologies}
						</p>
					) : null}
				</div>
				<div className={"sideContainer"}>
					{props.link ? (
						<p className="link">
							<a href={props.link}>🔗</a>
						</p>
					) : null}
					{props.date ? <p className={"date"}>{props.date}</p> : null}
					{props.location ? (
						<p className={"location"}>{props.location}</p>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Card;
