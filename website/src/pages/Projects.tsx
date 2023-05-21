// Projects.tsx

import React from 'react';

interface Project {
    name: string;
    description: string;
    imageUrl: string;
}

const projects: Project[] = [
    {
        name: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageUrl: 'https://via.placeholder.com/300x200.png?text=Project+1',
    },
    {
        name: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageUrl: 'https://via.placeholder.com/300x200.png?text=Project+2',
    },
    {
        name: 'Project 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageUrl: 'https://via.placeholder.com/300x200.png?text=Project+3',
    },
];

function Projects() {
    return (
        <div className="container">
            <header>
                <h1>Projects</h1>
            </header>
            <section>
                {projects.map((project) => (
                    <div key={project.name} className="project">
                        <img src={project.imageUrl} alt={project.name} />
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Projects;
