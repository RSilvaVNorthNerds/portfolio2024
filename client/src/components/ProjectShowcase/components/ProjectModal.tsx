import { Close } from "@mui/icons-material";
import { Box, Button, Modal, Typography } from "@mui/material";
import { ProjectCardProps } from "./ProjectCard";

export interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectInfo: ProjectCardProps;
}

function ProjectModal({
  isOpen,
  onClose,
  projectInfo: { name, description, githubLink, thumbnailUrl },
}: ProjectModalProps) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          width: "80%",
          maxWidth: "1200px",
          backgroundColor: "#242424",
          padding: "2em",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <Close
          sx={{
            position: "absolute",
            top: "5px",
            right: "5px",
            cursor: "pointer",
          }}
          onClick={onClose}
        />
        <Typography variant="h5">{name}</Typography>
        <img src={thumbnailUrl ? thumbnailUrl : "images/dev.jpg"} />
        <Typography variant="body1" sx={{ marginTop: "1em" }}>
          {description}
        </Typography>
        <Button href={githubLink}>Check out the code on github!</Button>
      </Box>
    </Modal>
  );
}

export default ProjectModal;
