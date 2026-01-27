export interface Experience {
  company: string;
  date: string;
  location: string;
  role: string;
  image?: string;
  description: string;
  technologies?: string;
}

export interface Project {
  name: string;
  location?: string;
  role?: string;
  description?: string;
  technologies?: string;
  link?: string;
  type: "SOFTWARE" | "WRITING";
}
