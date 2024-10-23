import { Box, Button, Link, Typography } from "@mui/material";

interface ProjectCardProps {
  name: string;
  description?: string;
  url: string;
  githubLink?: string;
}

export default function ProjectCard({
  name,
  description,
  githubLink,
}: ProjectCardProps) {
  return (
    <Box
      sx={{
        width: "300px",
        minHeight: "350px",
        borderRadius: "20px",
        margin: "0px 10px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 0px 10px 0px #141414",
      }}
    >
      <img
        style={{ width: "100%", borderRadius: "20px 20px 0px 0px" }}
        src="images/dev.jpg"
        alt="Project Preview"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "0.75em",
          flex: 1,
        }}
      >
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: "auto",
          }}
        >
          <Link
            href={githubLink}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{ width: "2rem" }}
              src="images/github-logo.png"
              alt="Github Link"
            />
          </Link>
          <Button variant="outlined">Learn More</Button>
        </Box>
      </Box>
    </Box>
  );
}
