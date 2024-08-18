import { Box, Typography } from "@mui/material";

interface ProjectCardProps {
  name: string;
}

export default function ProjectCard({ name }: ProjectCardProps) {
  return (
    <Box>
      <Typography variant="body1">{name}</Typography>
    </Box>
  );
}
