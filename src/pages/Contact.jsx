import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Paper,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import axios from "axios";
import "../style.css"; // Import the CSS file
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import Footer from "../components/Footer";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:5000/api/send-mail", formData);
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error); // Log the error
      toast.error("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <Box sx={{ backgroundColor: "white", color: "black", py: 8 }}>
        <Container maxWidth="sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              fontFamily="Curlz MT"
            >
              Contact Us
            </Typography>
            <Typography
              variant="h5"
              align="center"
              paragraph
              sx={{ color: "grey.600", mb: 6 }}
            >
              We'd love to hear from you. Get in touch with us!
            </Typography>
          </motion.div>

          <StyledPaper elevation={3}>
            <Typography variant="h5" gutterBottom>
              Send Us a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                margin="normal"
                required
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                margin="normal"
                required
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                margin="normal"
                variant="outlined"
                value={formData.phone}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                margin="normal"
                required
                multiline
                rows={4}
                variant="outlined"
                value={formData.message}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="dotted-button"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </StyledPaper>
        </Container>
        <ToastContainer />
      </Box>
      <Footer />
    </>
  );
};

export default Contact;
