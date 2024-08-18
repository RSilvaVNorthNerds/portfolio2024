import { Box } from "@mui/material";

export default function ContactForm() {
  return (
    <Box>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required />
        <button type="submit">Submit</button>
      </form>
    </Box>
  );
}
