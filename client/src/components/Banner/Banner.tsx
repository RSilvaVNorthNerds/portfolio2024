import { Box, Button, Typography } from "@mui/material";
import { Download, Visibility } from "@mui/icons-material";

const Banner = () => {
  return (
    <Box
      paddingTop="70px"
      sx={{
        width: "100%",
        padding: "0px 10em",
        height: "calc(100vh - 70px)",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Box>
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
                backgroundColor: "lightgrey",
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
          As a seasoned Full-Stack Developer with many years of professional
          experience, I bring a wealth of knowledge in computer science and a
          diverse skill set to the table. My expertise spans across various
          programming languages such as JavaScript, Python, and PHP, and I am
          proficient in using a range of frameworks including React, Apollo,
          Piral, Django, and Express JS. My technical prowess extends to both
          front-end and back-end development, allowing me to manage the entire
          development process seamlessly.
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "1em", fontWeight: 600 }}>
          View My Resume:
        </Typography>
        <Box>
          <Button
            href="../../assets/Rafael-Silva-Vergara-Resume.docx"
            download="Rafael-Silva-Vergara-Resume.docx"
            variant="outlined"
            size="large"
          >
            <Download sx={{ marginRight: "10px" }} />
            Download Resume
          </Button>
          <Button variant="outlined" size="large">
            <Visibility sx={{ marginRight: "10px" }} />
            View Resume
          </Button>
        </Box>
      </Box>
      <Box>
        <img src="/dev.jpg" />
      </Box>
    </Box>
  );
};

export default Banner;
