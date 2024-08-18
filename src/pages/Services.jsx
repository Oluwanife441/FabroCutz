import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import DottedButton from "../components/DottedButton";
import Footer from "../components/Footer";
const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: theme.shadows[10],
  },
}));

const StyledCardMedia = styled(CardMedia)({
  paddingTop: "56.25%", // 16:9 aspect ratio
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
});

const StyledPrice = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.primary.main,
}));

const services = [
  {
    title: "Classic Haircut",
    description: "A timeless cut tailored to your style and face shape.",
    price: "$30",
    image:
      "https://i.pinimg.com/736x/3b/18/1c/3b181c1030f26649e43b686e458b76c7.jpg",
  },
  {
    title: "Beard Trim",
    description: "Expert shaping and trimming for a well-groomed beard.",
    price: "$20",
    image:
      "https://i.pinimg.com/564x/8b/a6/04/8ba604e17d5212bf506a1b28e5953187.jpg",
  },
  {
    title: "Home service",
    description: "Get luxurious shave service from the comfort of your home.",
    price: "$35",
    image:
      "https://i.pinimg.com/564x/77/e4/c8/77e4c826ab55a609d572c72377822dc9.jpg",
  },
  {
    title: "Hair Coloring",
    description:
      "Professional color application to enhance or change your look.",
    price: "From $50",
    image:
      "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
  },
  {
    title: "Father & Son Package",
    description: "Haircuts for dad and son, building memories together.",
    price: "$50",
    image:
      "https://i.pinimg.com/736x/35/0c/f4/350cf4327b1ec16c33b655b609180700.jpg",
  },
  {
    title: "Styling",
    description: "Get your hair styled for a special event or night out.",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3",
  },
];

const Services = () => {
  return (
    <>
      <StyledContainer maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          component="h1"
          fontFamily="Curlz MT"
        >
          Our Services
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          Discover our range of professional barbering services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StyledCard>
                  <StyledCardMedia
                    image={service.image}
                    title={service.title}
                  />
                  <StyledCardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {service.description}
                    </Typography>
                    <StyledPrice variant="h6">{service.price}</StyledPrice>
                  </StyledCardContent>
                  <Box p={2}>
                    <DottedButton />
                  </Box>
                </StyledCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
      <Footer />
    </>
  );
};

export default Services;
