import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Banner from "./components/Banner/Banner";
import CoreSkillCarousel from "./components/CoreSkillCarousel/CoreSkillCarousel";
import ProjectShowcase from "./components/ProjectShowcase/ProjectShowcase";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navigation />
      <Banner />
      <CoreSkillCarousel />
      <ProjectShowcase />
      <Contact />
    </>
  );
}

export default App;
