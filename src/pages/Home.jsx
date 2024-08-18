import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import FeatureSection from "../components/FeatureSection";
import DottedButton from "../components/DottedButton";
import SignatureServices from "../components/ServiceGridItem";
import Footer from "../components/Footer";

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage:
    'url("https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh", // Changed from height to minHeight
  display: "flex",
  alignItems: "center",
  color: "white",
  paddingTop: theme.mixins.toolbar.minHeight, // Add padding for the navbar
  [theme.breakpoints.up("sm")]: {
    paddingTop: theme.mixins.toolbar.minHeight + 16, // Add extra padding for larger screens
  },
}));

const Section = styled(Box)({
  padding: "64px 0",
});

const Home = () => {
  return (
    <Box>
      <HeroSection>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              fontFamily="Curlz MT"
            >
              Welcome to FabroCutz
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              fontFamily="Lucida Handwriting"
            >
              Experience the art of grooming...
            </Typography>
            <DottedButton />
          </motion.div>
        </Container>
      </HeroSection>
      <FeatureSection />
      <SignatureServices />

      <Footer />
    </Box>
  );
};

export default Home;
