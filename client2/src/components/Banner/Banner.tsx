import { Box, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box
      paddingTop="70px"
      sx={{
        width: "100%",
        height: "calc(100vh - 70px)",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Box>
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
      <Box>
        <img src="/dev.jpg" />
      </Box>
    </Box>
  );
};

export default Banner;
