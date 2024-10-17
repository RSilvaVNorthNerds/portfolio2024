import { Box, Typography } from "@mui/material";

export interface SkillCardProps {
  name: string;
  yearsOfExperience: number;
  logo: string;
}

export default function SkillCard({
  name,
  yearsOfExperience,
  logo,
}: SkillCardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "grey",
        borderRadius: "5px",
        padding: "1em",
        marginRight: "1em",
      }}
    >
      <Box>
        <img src={`${logo}`} alt="skill logo" />
        <Typography variant="body1">{name}</Typography>
      </Box>
      <Typography variant="body2">
        Years of Experience: {yearsOfExperience}
      </Typography>
    </Box>
  );
}
