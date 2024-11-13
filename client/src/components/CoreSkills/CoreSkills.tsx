import { Box, Typography } from "@mui/material";
import SkillCard from "./components/SkillCard";
import { useEffect, useState } from "react";
import CoreSkillsStyles from "./CoreSkillsStyles";
import environment from "../../../environment";

type GetAllSkillsResponse = {
  name: string;
  yearsOfExperience: number;
  logo: string;
  type: SkillType;
};

type SkillType =
  | "language"
  | "library"
  | "framework"
  | "dev-tool"
  | "testing"
  | "design"
  | "cloud-tool"
  | "database";

export default function CoreSkills() {
  const [skills, setSkills] = useState<GetAllSkillsResponse[]>([]);

  useEffect(() => {
    fetch(`${environment.API_URL}:3003/get-skills`, {
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

  // TODO: refactor this filtering logic
  const getFilteredSkills = (type: SkillType[]) => {
    return skills.filter((skill) => type.includes(skill.type));
  };

  return (
    <Box
      id="skills"
      sx={{
        width: "100%",
        maxWidth: "1200px",
        backgroundColor: "#111A25",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem 3rem",
        position: "relative",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          width: "fit-content",
          zIndex: 1,
          "::after": {
            content: '""',
            display: "block",
            width: "55%",
            height: "20px",
            backgroundColor: "#508D9F",
            transform: "translateX(100%) translateY(-110%)",
            position: "relative",
            zIndex: -1,
          },
        }}
      >
        Skills
      </Typography>
      <Box
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={CoreSkillsStyles.CoreSkillsCategory}>
          <Typography variant="h6">Languages:</Typography>
          <Box sx={CoreSkillsStyles.CoreSkillsRow}>
            {getFilteredSkills(["language"]).map((skill) => (
              <SkillCard
                name={skill.name}
                yearsOfExperience={skill.yearsOfExperience}
                logo={skill.logo}
              />
            ))}
          </Box>
        </Box>
        <Box sx={CoreSkillsStyles.CoreSkillsCategory}>
          <Typography variant="h6">Libraries & Frameworks:</Typography>
          <Box sx={CoreSkillsStyles.CoreSkillsRow}>
            {getFilteredSkills(["framework", "library"]).map((skill) => (
              <SkillCard
                name={skill.name}
                yearsOfExperience={skill.yearsOfExperience}
                logo={skill.logo}
              />
            ))}
          </Box>
        </Box>
        <Box sx={CoreSkillsStyles.CoreSkillsCategory}>
          <Typography variant="h6">Dev Tools & Cloud:</Typography>
          <Box sx={CoreSkillsStyles.CoreSkillsRow}>
            {getFilteredSkills(["dev-tool", "cloud-tool"]).map((skill) => (
              <SkillCard
                name={skill.name}
                yearsOfExperience={skill.yearsOfExperience}
                logo={skill.logo}
              />
            ))}
          </Box>
        </Box>
        <Box sx={CoreSkillsStyles.CoreSkillsCategory}>
          <Typography variant="h6">Testing Frameworks & Tools</Typography>
          <Box sx={CoreSkillsStyles.CoreSkillsRow}>
            {getFilteredSkills(["testing"]).map((skill) => (
              <SkillCard
                name={skill.name}
                yearsOfExperience={skill.yearsOfExperience}
                logo={skill.logo}
              />
            ))}
          </Box>
        </Box>
        <Box sx={CoreSkillsStyles.CoreSkillsCategory}>
          <Typography variant="h6">UI/UX Design</Typography>
          <Box sx={CoreSkillsStyles.CoreSkillsRow}>
            {getFilteredSkills(["design"]).map((skill) => (
              <SkillCard
                name={skill.name}
                yearsOfExperience={skill.yearsOfExperience}
                logo={skill.logo}
              />
            ))}
          </Box>
        </Box>
        <Box sx={CoreSkillsStyles.CoreSkillsCategory}>
          <Typography variant="h6">Databases</Typography>
          <Box sx={CoreSkillsStyles.CoreSkillsRow}>
            {getFilteredSkills(["database"]).map((skill) => (
              <SkillCard
                name={skill.name}
                yearsOfExperience={skill.yearsOfExperience}
                logo={skill.logo}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
