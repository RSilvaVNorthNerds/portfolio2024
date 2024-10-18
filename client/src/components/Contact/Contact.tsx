import { Box, Typography } from "@mui/material";
import ContactForm from "./components/ContactForm";

export default function Contact() {
  return (
    <Box
      sx={{
        padding: "5rem 0rem",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">Contact:</Typography>
      <Box sx={{ display: "flex" }}>
        <ContactForm />
      </Box>
    </Box>
  );
}
