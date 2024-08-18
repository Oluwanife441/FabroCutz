import React from "react";
import { Box, Container, Typography, Grid, Paper, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "#f5f5f5",
}));

const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(20),
  height: theme.spacing(20),
  marginBottom: theme.spacing(2),
}));

const About = () => {
  return (
    <>
      <Box sx={{ bgcolor: "white", color: "black", py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              component="h1"
              align="center"
              gutterBottom
              fontFamily="Curlz MT"
            >
              About FabroCutz
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Crafting Style and Confidence Since 2010
            </Typography>
          </motion.div>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Typography variant="h4" gutterBottom>
                  Our Story
                </Typography>
                <Typography paragraph>
                  FabroCutz was founded with a simple yet powerful vision: to
                  create a space where men could not just get a haircut, but
                  experience a transformation. Our journey began in 2010, and
                  since then, we've been dedicated to perfecting the art of
                  grooming.
                </Typography>
                <Typography paragraph>
                  What sets us apart is our unwavering commitment to quality,
                  attention to detail, and a deep understanding of classic and
                  contemporary styles. We believe that a great haircut is more
                  than just a service - it's a craft that boosts confidence and
                  enhances individuality.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1592647420148-bfcc177e2117?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Barber Shop Interior"
                  sx={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8 }}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              fontFamily="Curlz MT"
            >
              Meet Our Expert Stylists
            </Typography>
            <Grid container spacing={4} sx={{ mt: 2 }}>
              {[
                {
                  name: "John Doe",
                  role: "Master Barber",
                  avatar:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  name: "Jane Smith",
                  role: "Color Specialist",
                  avatar:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  name: "Mike Johnson",
                  role: "Beard Expert",
                  avatar:
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
              ].map((stylist, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                  >
                    <StyledPaper elevation={3}>
                      <LargeAvatar src={stylist.avatar} alt={stylist.name} />
                      <Typography variant="h6" gutterBottom>
                        {stylist.name}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {stylist.role}
                      </Typography>
                    </StyledPaper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default About;
