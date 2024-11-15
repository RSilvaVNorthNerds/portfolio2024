import { useState } from "react";

import { Box, Button, Link, Typography } from "@mui/material";

import ProjectModal from "./ProjectModal";
import projectShowcaseStyles from "../projectShowcaseStyles";

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

  const thumbnailImage = thumbnailUrl ? thumbnailUrl : "images/dev.jpg";

  return (
    <>
      <Box sx={projectShowcaseStyles.projectCardWrapper}>
        <img
          style={{ width: "100%", borderRadius: "20px 20px 0px 0px" }}
          src={thumbnailImage}
          alt="Project Preview"
        />
        <Box sx={projectShowcaseStyles.projectCardContent}>
          <Typography variant="h6">{name}</Typography>
          <Typography
            variant="body2"
            sx={projectShowcaseStyles.projectCardDescription}
          >
            {description}
          </Typography>
          <Box sx={projectShowcaseStyles.projectCardActionButtons}>
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
