import { useState } from "react";

import { Box, Button, Typography } from "@mui/material";
import { Download, Visibility } from "@mui/icons-material";

import ResumeViewerModal from "./components/ResumeViewerModal";
import BannerStyles from "./BannerStyles";

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOnClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <Box sx={BannerStyles.BannerWrapper}>
      <Box sx={BannerStyles.BannerContentWrapper}>
        <Box sx={{ width: "100%", maxWidth: "800px" }}>
          <Box sx={{ width: "fit-content" }}>
            <Typography variant="h6">Hello, I'm</Typography>
            <Typography
              variant="h2"
              sx={{
                "::after": {
                  content: '""',
                  display: "block",
                  width: "55%",
                  height: "20px",
                  backgroundColor: "#2E409A",
                  transform: "translateX(100%) translateY(-110%)",
                  position: "relative",
                  zIndex: -1,
                },
              }}
            >
              Rafael
            </Typography>
          </Box>
          <Typography variant="subtitle2">
            As a seasoned Full-Stack Developer with over 4 years of professional
            experience, I bring a wealth of knowledge in computer science and a
            diverse skill set to the table. My expertise spans across various
            programming languages such as JavaScript, Python, and PHP, and I am
            proficient in using a range of frameworks including React, Apollo,
            Piral, Django, and Express JS. My technical prowess extends to both
            front-end and back-end development, allowing me to manage the entire
            development process seamlessly.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "3em 1em",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontSize: "1em", fontWeight: 600, marginBottom: "2em" }}
            >
              View My Resume
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1em",
              }}
            >
              <Button
                href="../../assets/Rafael-Silva-Vergara-Resume.docx"
                download="Rafael-Silva-Vergara-Resume.docx"
                variant="outlined"
                size="large"
              >
                <Download sx={{ marginRight: "10px" }} />
                Download Resume
              </Button>
              |
              <Button variant="outlined" size="large" onClick={handleModalOpen}>
                <Visibility sx={{ marginRight: "10px" }} />
                View Resume
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={BannerStyles.BannerImage}
          component="img"
          src="images/profile-pic.jpg"
        ></Box>
        <ResumeViewerModal isOpen={isModalOpen} onClose={handleModalOnClose} />
      </Box>
    </Box>
  );
};

export default Banner;
