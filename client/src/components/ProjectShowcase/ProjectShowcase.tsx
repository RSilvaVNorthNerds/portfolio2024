import { Box, Grid, Typography } from "@mui/material";
import ProjectCard from "./components/ProjectCard";
import { useEffect, useState } from "react";
import projectShowcaseStyles from "./projectShowcaseStyles";
import environment from "../../../environment";

type GetAllProjectsResponse = {
  name: string;
  description: string;
  url: string;
  githubUrl: string;
  thumbnailUrl: string;
  techStack: string[];
};

export default function ProjectShowcase() {
  const [projects, setProjects] = useState<GetAllProjectsResponse[]>([]);

  useEffect(() => {
    fetch(`${environment.API_URL}/all-projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  return (
    <Box id="projects" sx={projectShowcaseStyles.projectShowcaseWrapper}>
      <Typography variant="h4" sx={projectShowcaseStyles.projectHeader}>
        Latest Projects
      </Typography>
      <Grid container sx={projectShowcaseStyles.projectContainer}>
        {projects && projects.map((project) => (
          <ProjectCard
            name={project.name}
            description={project.description ?? ""}
            url={project.url}
            githubLink={project.githubUrl ?? ""}
            thumbnailUrl={project.thumbnailUrl}
            techStack={project.techStack}
          />
        ))}
      </Grid>
    </Box>
  );
}
