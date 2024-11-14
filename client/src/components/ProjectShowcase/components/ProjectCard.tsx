import { useState } from "react";

import { Box, Button, Link, Typography } from "@mui/material";

import ProjectModal from "./ProjectModal";

export interface ProjectCardProps {
  name: string;
  description?: string;
  url: string;
  githubLink?: string;
  thumbnailUrl?: string;
  techStack?: string[];
}

export default function ProjectCard({
  name,
  description,
  githubLink,
  url,
  thumbnailUrl,
  techStack,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOnClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Box
        sx={{
          width: "300px",
          height: "375px",
          maxHeight: "375px",
          borderRadius: "20px",
          margin: "0px 10px",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0px 0px 10px 0px #141414",
          backgroundColor: "#102D3B",
        }}
      >
        <img
          style={{ width: "100%", borderRadius: "20px 20px 0px 0px" }}
          src={thumbnailUrl ? thumbnailUrl : "images/dev.jpg"}
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
          <Typography
            variant="body2"
            sx={{ height: "60px", marginBottom: "1rem", overflowY: "auto" }}
          >
            {description}
          </Typography>
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
              target="_blank"
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
            <Button variant="outlined" onClick={handleModalOpen}>
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleModalOnClose}
        projectInfo={{
          name,
          description,
          url,
          githubLink,
          thumbnailUrl,
          techStack,
        }}
      />
    </>
  );
}
