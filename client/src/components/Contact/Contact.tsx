import { Box, Typography } from "@mui/material";
import ContactForm from "./components/ContactForm";

export default function Contact() {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "0rem 1rem",
        marginBottom: "5rem",
        backgroundImage: "url('images/mine.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "bottom",
        backgroundColor: "#111A25",
      }}
    >
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
          variant="h4"
          sx={{
            width: "fit-content",
            position: "relative",
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

            "@media (max-width: 768px)": {
              textAlign: "center",
              "::after": {
                width: "53%",
              },
            },
          }}
        >
          Let's Work Together!
        </Typography>
        <Box sx={{ display: "flex" }}>
          <ContactForm />
        </Box>
      </Box>
    </Box>
  );
}
