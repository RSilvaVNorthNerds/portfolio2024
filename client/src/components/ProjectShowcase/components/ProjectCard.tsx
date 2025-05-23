import { useState } from "react";

import { Box, Button, Typography } from "@mui/material";

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
    <Box
      sx={{
        margin: "2rem 0rem",
        "&:hover": {
          transform: "scale(1.01)",
          transition: "all 0.25s ease",
        },
      }}
    >
      <Box sx={projectShowcaseStyles.projectCardWrapper}>
        <img
          style={projectShowcaseStyles.ProjectCardImage as React.CSSProperties}
          src={thumbnailImage}
          alt="Project Preview"
        />
        <Box sx={projectShowcaseStyles.projectCardContent}>
          <Typography variant="h6" sx={{ fontWeight: "600" }}>
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={projectShowcaseStyles.projectCardDescription}
          >
            {description}
          </Typography>
          <Box sx={projectShowcaseStyles.projectCardActionButtons}>
            {/* <Link
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
            </Link> */}
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
    </Box>
  );
}
