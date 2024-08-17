import { Box, Typography } from "@mui/material";
import Navigation from "./components/Navigation/Navigation";
import Banner from "./components/Banner/Banner";
import CoreSkillCarousel from "./components/CoreSkillCarousel/CoreSkillCarousel";
import ProjectShowcase from "./components/ProjectShowcase/ProjectShowcase";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Navigation />
      <Banner />
      <CoreSkillCarousel />
      <ProjectShowcase />
      <Contact />
    </Box>
  );
}
