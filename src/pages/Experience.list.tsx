type jobDetails = {
	company: string;
	date: string;
	location: string;
	role: string;
	image: any;
	description: string;
	technologies?: string;
	link?: string;
};

let listOfJobs: jobDetails[] = [
	{
		company: "University of Waterloo",
		date: "2018-2023",
		location: "Waterloo, ON",
		role: "B.A.Sc. Honours Mechatronics Engineering/Computing Option",
		image: require("../media/logos/uwaterlooseal.png"),
		description: "",
	},
	{
		company: "Q4 Inc",
		date: "May-Aug 2022",
		location: "Toronto, ON",
		role: "Full-Stack Engineer Co-op",
		image: require("../media/logos/q4inc.jpg"),
		description: "",
		technologies: "TypeScript, React, NodeJS, SQL, MongoDB, Cypress, Jest",
	},
	{
		company: "University of Hawai'i",
		date: "Jan-Apr 2022",
		location: "Honolulu, HI",
		role: "Software Research Engineer Co-op",
		image: require("../media/logos/uhmanoa.jpg"),
		description: "",
		technologies: "C++, Fortan, MATLAB, Python, MFC",
	},
	{
		company: "Ford Motor Company",
		date: "May-Aug 2021",
		location: "Kanata, ON (remote)",
		role: "Embedded Software Engineer Co-op",
		image: require("../media/logos/ford.jpg"),
		description: "",
		technologies: "C++, QNX RTOS, CTest",
	},
	{
		company: "University of Hawai'i",
		date: "Sept-Dec 2020",
		location: "Honolulu, HI (remote)",
		role: "Undergraduate Researcher",
		image: require("../media/logos/uhmanoa.jpg"),
		description: "",
	},
	{
		company: "Borealis Wind",
		date: "Jan-Apr 2020",
		location: "Waterloo, ON",
		role: "Electrical & Controls Engineer Co-op",
		image: require("../media/logos/borealiswind.jpeg"),
		description: "",
		technologies: "Python, Structured Text, C++",
	},
	{
		company: "University of Alberta",
		date: "May-Aug 2019",
		location: "Edmonton, AB",
		role: "Undergraduate Research Assistant",
		image: require("../media/logos/ualbertaseal.jpg"),
		description: "",
	},
];

export default listOfJobs;
