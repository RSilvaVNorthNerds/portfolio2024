import { Box, Typography } from "@mui/material";
import SkillCard from "./components/SkillCard";

export default function CoreSkillCarousel() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80px",
        backgroundColor: "darkgrey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4rem 1rem",
      }}
    >
      <Typography variant="h6">Core Skills:</Typography>
      <Box sx={{ display: "flex" }}>
        <SkillCard skill="React" />
      </Box>
    </Box>
  );
}
