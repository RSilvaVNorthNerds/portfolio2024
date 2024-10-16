import { Box, Grid, Typography } from "@mui/material";
import ProjectCard from "./components/ProjectCard";
import { useEffect, useState } from "react";
import projectShowcaseStyles from "./projectShowcaseStyles";

type GetAllProjectsResponse = {
  name: string;
  description: string;
  url: string;
  githubLink: string;
};

export default function ProjectShowcase() {
  const [projects, setProjects] = useState<GetAllProjectsResponse[]>([]);

  useEffect(() => {
    fetch("http://localhost:3003/all-projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.error(data);
        setProjects(data);
      });
  }, []);

  return (
    <Box>
      <Typography variant="h3" sx={{ margin: "3rem 0px" }}>
        Projects:
      </Typography>
      <Grid container sx={projectShowcaseStyles.projectContainer}>
        {projects.map((project) => (
          <Grid xs={12} lg={3} xl={4}>
            <ProjectCard
              name={project.name}
              description={project.description ?? ""}
              url={project.url}
              githubLink={project.githubLink ?? ""}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
