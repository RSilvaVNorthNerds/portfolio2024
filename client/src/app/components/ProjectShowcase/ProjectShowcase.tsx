import { Box, Typography } from "@mui/material";
import ProjectCard from "./components/ProjectCard";

export default function ProjectShowcase() {
  return (
    <Box>
      <Typography variant="h6">Projects:</Typography>
      <Box sx={{ display: "flex" }}>
        <ProjectCard name="Project 1" />
      </Box>
    </Box>
  );
}
