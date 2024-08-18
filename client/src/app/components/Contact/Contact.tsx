import { Box, Typography } from "@mui/material";
import ContactForm from "./components/ContactForm";

export default function Contact() {
  return (
    <Box>
      <Typography variant="h3">Contact:</Typography>
      <Box sx={{ display: "flex" }}>
        <ContactForm />
      </Box>
    </Box>
  );
}
