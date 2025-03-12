import Navigation from "./components/Navigation/Navigation";
import Banner from "./components/Banner/Banner";
import ProjectShowcase from "./components/ProjectShowcase/ProjectShowcase";
import Contact from "./components/Contact/Contact";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import CoreSkills from "./components/CoreSkills/CoreSkills";
import Publications from "./components/Publications/Publications";

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
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Navigation />
        <Banner />
        <CoreSkills />
        <ProjectShowcase />
        <Publications />
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default App;
