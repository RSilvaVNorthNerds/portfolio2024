import { Box, Typography } from "@mui/material";

export interface SkillCardProps {
  skill: string;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "6rem",
        height: "3rem",
        backgroundColor: "grey",
        borderRadius: "5px",
      }}
    >
      <Typography variant="body2">{skill}</Typography>
    </Box>
  );
}
