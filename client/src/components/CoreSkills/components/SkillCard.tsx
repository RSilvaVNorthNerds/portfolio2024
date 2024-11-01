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
        backgroundColor: "#102D3B",
        borderRadius: "5px",
        padding: "1em",
        marginRight: "1em",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <img
          src={`images/${logo}`}
          style={{ maxWidth: "2em" }}
          alt="skill logo"
        />
        <Typography variant="body1">{name}</Typography>
      </Box>
      <Typography variant="subtitle2">
        Years of Experience: {yearsOfExperience}
      </Typography>
    </Box>
  );
}
