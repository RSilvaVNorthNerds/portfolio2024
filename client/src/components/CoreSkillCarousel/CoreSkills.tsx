import { Box, Grid, Typography } from "@mui/material";
import SkillCard from "./components/SkillCard";
import { useEffect, useState } from "react";

type GetAllSkillsResponse = {
  name: string;
  yearsOfExperience: number;
  logo: string;
};

export default function CoreSkills() {
  const [skills, setSkills] = useState<GetAllSkillsResponse[]>([]);

  useEffect(() => {
    fetch("http://localhost:3003/get-skills", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
      });
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "darkgrey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem 1rem",
      }}
    >
      <Typography variant="h3">Skills</Typography>
      <Grid
        container
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid>
          <Typography variant="h6">Languages:</Typography>
          <Box sx={{ display: "flex" }}>
            {skills.map((skill) => (
              <SkillCard
                name={skill.name}
                yearsOfExperience={skill.yearsOfExperience}
                logo={skill.logo}
              />
            ))}
          </Box>
        </Grid>
        <Grid>
          <Typography variant="h6">Libraries & Frameworks:</Typography>
          <Box sx={{ display: "flex" }}>
            {skills.map((skill) => (
              <SkillCard
                name={skill.name}
                yearsOfExperience={skill.yearsOfExperience}
                logo={skill.logo}
              />
            ))}
          </Box>
        </Grid>
        <Grid>
          <Typography variant="h6">Dev Tools & Cloud:</Typography>
          <Box sx={{ display: "flex" }}>
            {skills.map((skill) => (
              <SkillCard
                name={skill.name}
                yearsOfExperience={skill.yearsOfExperience}
                logo={skill.logo}
              />
            ))}
          </Box>
        </Grid>
        <Grid>
          <Typography variant="h6">Testing Frameworks & Tools</Typography>
          <Box sx={{ display: "flex" }}>
            {skills.map((skill) => (
              <SkillCard
                name={skill.name}
                yearsOfExperience={skill.yearsOfExperience}
                logo={skill.logo}
              />
            ))}
          </Box>
        </Grid>
        <Grid>
          <Typography variant="h6">UI/UX Design</Typography>
          <Box sx={{ display: "flex" }}>
            {skills.map((skill) => (
              <SkillCard
                name={skill.name}
                yearsOfExperience={skill.yearsOfExperience}
                logo={skill.logo}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
