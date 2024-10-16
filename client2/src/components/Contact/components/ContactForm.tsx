import { Box, Button, TextField, Typography } from "@mui/material";
import contactStyles from "../contactStyles";
import { ChangeEvent, FormEvent, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formResponse, setFormResponse] = useState<string>("");

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3003/contact-me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json());

      setFormResponse(response.message);
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormResponse(
        "An error occurred while submitting the form. Please try again later."
      );
    }
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
      {formResponse != "" && <Typography>{formResponse}</Typography>}
    </Box>
  );
}
