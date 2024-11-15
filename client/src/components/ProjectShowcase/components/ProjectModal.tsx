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
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0rem 1rem",
      }}
    >
      <Box
        sx={{
          width: "80%",
          maxWidth: "1200px",
          backgroundColor: "#242424",
          padding: "2em",
          borderRadius: "10px",
          position: "relative",

          "@media (max-width: 768px)": {
            width: "fit-content",
          },
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
        <Box
          sx={{
            display: "flex",
            "@media (max-width: 768px)": {
              flexDirection: "column",
            },
          }}
        >
          <img
            style={{ width: "100%", maxWidth: "400px" }}
            src={thumbnailUrl ? thumbnailUrl : "images/dev.jpg"}
          />
          <Box sx={{ padding: "1rem" }}>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="body1" sx={{ marginTop: "1em" }}>
              {description}
            </Typography>
            <Button variant="outlined" href={githubLink}>
              Check out the code on github!
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default ProjectModal;
