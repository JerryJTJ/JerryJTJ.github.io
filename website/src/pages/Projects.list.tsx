import { Url } from "url";

export enum ProjectType {
	SOFTWARE,
	WRITING,
}

type projectDetails = {
	name: string;
	date?: string;
	location?: string;
	role?: string;
	description?: string;
	class?: string;
	technologies?: string;
	link?: string;
	type: ProjectType;
};

let listOfProjects: projectDetails[] = [
	{
		name: "Gymstagram",
		role: "Front-End Developer",
		description: `Gymstagram is a social media app designed for fitness enthusiasts.
        The app allows users to create accounts, post pictures and videos, follow other users, and view a feed of posts from people they follow.`,
		technologies: "Java, Android Studio, MongoDB",
		link: "https://github.com/mhyeun/gymstagram",
		type: ProjectType.SOFTWARE,
	},
	{
		name: "TTC Delay Algorithm",
		role: "Developer",
		description: `We developed a machine learning algorithm to provide users with advance delay information to improve planning. 
        The project utilizes TTC subway delay data, performs data cleaning and feature engineering, and explores logistic regression models with regularization techniques, 
        aiming to improve the accuracy of delay predictions.`,
		technologies: "Python, Pandas, Numpy, Tensorflow",
		link: "https://github.com/mhyeun/msci446-ttc-delay",
		type: ProjectType.SOFTWARE,
	},
	{
		name: "Face masks against COVID-19: Standards, efficacy, testing and decontamination methods",
		description: `A published systemic review paper investigating the efficacy and mechanisms of facial masking, 
        as well as various testing decomtamination methods. I wrote this as a lead author as part of a co-op at the University of Hawai'i at Manoa working under Dr. Yi Zuo.`,
		link: "https://www.sciencedirect.com/science/article/pii/S0001868621000762",
		type: ProjectType.WRITING,
	},
	{
		name: "Was the Austro-Hungarian Compromise of 1867 (Ausgleich) necessary to preserve the Austrian Empire?",
		description:
			"My historical invesgiation for my History IB HL course in high school.",
		link: "../media/documents/historical-investigation.pdf",
		type: ProjectType.WRITING,
	},
];

export default listOfProjects;
