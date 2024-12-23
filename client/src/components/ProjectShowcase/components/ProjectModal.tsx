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
  projectInfo: { name, description, thumbnailUrl, url, techStack },
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
            top: "10px",
            right: "10px",
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
            style={{
              width: "100%",
              maxHeight: "20rem",
              objectFit: "cover",
            }}
            src={thumbnailUrl ? thumbnailUrl : "images/dev.jpg"}
          />
          <Box sx={{ padding: "1rem" }}>
            <Typography variant="h5">{name}</Typography>
            <Box
              sx={{
                display: "flex",
                gap: "0.5em",
                flexWrap: "wrap",
                marginTop: "1em",
              }}
            >
              {techStack &&
                techStack.map((tool) => {
                  return (
                    <Typography
                      variant="body1"
                      sx={{
                        width: "fit-content",
                        height: "fit-content",
                        padding: "0.5em",
                        borderRadius: "5px",
                        border: "1px solid #90CAF9",
                        color: "#90CAF9",
                        fontSize: "0.8rem",
                      }}
                    >
                      {tool}
                    </Typography>
                  );
                })}
            </Box>
            <Typography
              variant="body1"
              sx={{ marginTop: "1em", maxHeight: "200px", overflow: "auto" }}
            >
              {description}
            </Typography>
            {url && (
              <Button variant="outlined" href={url} target="_blank">
                Check out a free Demo!
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default ProjectModal;
