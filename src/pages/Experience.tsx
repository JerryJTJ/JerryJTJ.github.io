import "./Experience.css";
import Card, { CardType } from "../components/Card";
import listOfJobs from "./Experience.list";

function Experience() {
	return (
		<div className="card-list">
			{listOfJobs.map((job) => (
				<Card
					key={`job-${job.company}-${job.date}`}
					type={CardType.JOB}
					title={job.company}
					date={job.date}
					location={job.location}
					role={job.role}
					image={job.image}
					description={job.description}
					technologies={job.technologies}
					link={job.link}
				/>
			))}
		</div>
	);
}

export default Experience;
