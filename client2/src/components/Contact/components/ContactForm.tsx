import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import contactStyles from "../contactStyles";

export default function ContactForm() {
  // const { register, handleSubmit } = useForm();

  return (
    <Box>
      <form>
        <TextField
          sx={{ input: contactStyles.contactInput }}
          id="name"
          label="Name"
          variant="outlined"
          color="success"
          placeholder="Name"
        />
        <TextField
          sx={{ input: contactStyles.contactInput }}
          id="email"
          label="Email"
          variant="outlined"
          placeholder="Email"
        />
        <TextField
          sx={{ input: contactStyles.contactInput }}
          id="message"
          label="Message"
          variant="outlined"
          placeholder="Message"
        />
        <Button>Submit</Button>
      </form>
    </Box>
  );
}
