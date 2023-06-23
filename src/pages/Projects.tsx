import React from "react";
import { View } from "react-native";
import Card from "../components/Card";
import listOfProjects, { ProjectType } from "./Projects.list";
import "./Projects.css";

function Projects() {
	return (
		<div className="parent">
			<p className="grouping">SOFTWARE 💻</p>

			<div className="cards">
				{listOfProjects.map((project) =>
					project.type === ProjectType.SOFTWARE ? (
						<Card
							type="project"
							title={project.name}
							role={project.role}
							description={project.description}
							technologies={project.technologies}
							link={project.link}
						/>
					) : null
				)}
			</div>

			<p className="grouping">WRITING 📝</p>

			<div className="cards">
				{listOfProjects.map((project) =>
					project.type === ProjectType.WRITING ? (
						<Card
							type="project"
							title={project.name}
							role={project.role}
							description={project.description}
							technologies={project.technologies}
							link={project.link}
						/>
					) : null
				)}
			</div>
		</div>
	);
}

export default Projects;
