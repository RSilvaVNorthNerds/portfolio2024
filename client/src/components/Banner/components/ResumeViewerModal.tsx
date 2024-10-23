import { Close } from "@mui/icons-material";
import { Box, Modal, Typography } from "@mui/material";

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ResumeViewerModal({ isOpen, onClose }: ResumeViewerModalProps) {
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
        <Typography variant="h5">Resume</Typography>
        <iframe
          width="100%"
          height="800px"
          src="assets/Rafael-Silva-Vergara-Resume.pdf"
        ></iframe>
      </Box>
    </Modal>
  );
}

export default ResumeViewerModal;
