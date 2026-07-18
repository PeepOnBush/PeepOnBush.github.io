// Here we tell TypeScript exactly what a "Project" is.
export interface Project {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  githubLink: string;
}

export const aboutMe = {
  name: "Your Name",
  role: "IT Professional / Developer",
  bio: "Hello! I am an IT enthusiast passionate about building reliable software and learning new technologies like Docker and TypeScript.",
};

export const myProjects: Project[] = [
  {
    id: 1,
    name: "Dockerized Portfolio",
    description: "A personal portfolio built with React, TypeScript, and packed inside a Docker container.",
    techStack: ["React", "TypeScript", "Docker", "Vite"],
    githubLink: "https://github.com/yourusername/portfolio",
  },
  {
    id: 2,
    name: "Future IT Project",
    description: "Another cool project I did in the IT field.",
    techStack: ["Python", "Linux", "Networking"],
    githubLink: "https://github.com/yourusername/project2",
  }
];