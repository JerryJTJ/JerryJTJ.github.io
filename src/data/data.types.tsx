export type Experience = {
  company: string;
  date: string;
  location: string;
  role: string;
  image?: string;
  description: string;
  technologies?: string;
  link?: string;
};

export type Project = {
  name: string;
  date?: string;
  location?: string;
  role?: string;
  description?: string;
  technologies?: string;
  link?: string;
  type: "SOFTWARE" | "WRITING";
};
