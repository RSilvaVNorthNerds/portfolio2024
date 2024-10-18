import { Box, Typography } from "@mui/material";
import SkillCard from "./components/SkillCard";
import { useEffect, useState } from "react";

type GetAllSkillsResponse = {
  name: string;
  yearsOfExperience: number;
  logo: string;
};

export default function CoreSkillCarousel() {
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
        console.error(data);
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
        padding: "4rem 1rem",
      }}
    >
      <Typography variant="h6">Core Skills:</Typography>
      <Box sx={{ display: "flex" }}>
        {skills.map((skill) => (
          <SkillCard
            name={skill.name}
            yearsOfExperience={skill.yearsOfExperience}
            logo={skill.logo}
          />
        ))}
      </Box>
    </Box>
  );
}
