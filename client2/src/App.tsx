import Navigation from "./components/Navigation/Navigation";
import Banner from "./components/Banner/Banner";
import CoreSkillCarousel from "./components/CoreSkillCarousel/CoreSkillCarousel";
import ProjectShowcase from "./components/ProjectShowcase/ProjectShowcase";
import Contact from "./components/Contact/Contact";
import { Box, createTheme, ThemeProvider } from "@mui/material";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Navigation />
        <Banner />
        <CoreSkillCarousel />
        <ProjectShowcase />
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default App;
