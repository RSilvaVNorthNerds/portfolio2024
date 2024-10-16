import { Box, Button, TextField } from "@mui/material";
import contactStyles from "../contactStyles";
import { ChangeEvent, FormEvent, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3003/contact-me").then(
      (res) => res.json()
    );

    console.error(response);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target as HTMLInputElement;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <Box>
      <form onSubmit={handleSubmitForm} style={contactStyles.form}>
        <Box>
          <TextField
            sx={{ input: contactStyles.contactInput }}
            id="name"
            label="Name"
            variant="outlined"
            placeholder="Name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            sx={{ input: contactStyles.contactInput }}
            id="email"
            label="Email"
            variant="outlined"
            placeholder="Email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </Box>
        <TextField
          sx={{ input: contactStyles.contactInput }}
          id="message"
          label="Message"
          variant="outlined"
          placeholder="Message"
          type="text"
          required
          value={formData.message}
          onChange={handleInputChange}
        />
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}
