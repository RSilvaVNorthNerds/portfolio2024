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
        <Typography variant="h2">Rafael Silva Vergara</Typography>
      </Box>
      <Box>
        <img src="/dev.jpg" />
      </Box>
    </Box>
  );
};

export default Banner;
