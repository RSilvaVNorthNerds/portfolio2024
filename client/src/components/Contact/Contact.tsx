import { Box, Typography } from "@mui/material";
import ContactForm from "./components/ContactForm";

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        padding: "5rem 0rem",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          width: "fit-content",
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
        Let's Connect!
      </Typography>
      <Box sx={{ display: "flex" }}>
        <ContactForm />
      </Box>
    </Box>
  );
}
