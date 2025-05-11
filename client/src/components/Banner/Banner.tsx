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
            <Typography variant="h2">Rafael</Typography>
          </Box>
          <Typography
            variant="subtitle2"
            sx={BannerStyles.BannerContentDescription}
          >
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1em",

                "@media (max-width: 768px)": {
                  flexDirection: "column",
                },
              }}
            >
              <Button
                href="../../assets/Rafael-Silva-Vergara-Resume.pdf"
                download="Rafael-Silva-Vergara-Resume.pdf"
                variant="outlined"
                size="large"
              >
                <Download sx={{ marginRight: "10px", borderWidth: "2px" }} />
                <Typography variant="body1">Download Resume</Typography>
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={handleModalOpen}
              >
                <Visibility sx={{ marginRight: "10px", borderWidth: "2px" }} />
                <Typography variant="body1">View Resume</Typography>
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
