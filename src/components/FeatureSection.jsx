import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { motion, useAnimation } from "framer-motion";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useInView } from "react-intersection-observer";

// You'll need to install these:
// npm install framer-motion react-slick slick-carousel @mui/icons-material

const StyledSection = styled(Box)(({ theme }) => ({
  padding: "80px 0",
  background: "linear-gradient(135deg, #8B4513 0%, #D2691E 100%)",
  overflow: "hidden",
}));

const StyledSlider = styled(Slider)({
  ".slick-slide": {
    padding: "0 15px",
  },
});

const FeatureCard = styled(motion.div)(({ theme }) => ({
  position: "relative",
  height: 400,
  borderRadius: 20,
  overflow: "hidden",
  cursor: "pointer",
  "&:hover": {
    "& .card-background": {
      filter: "blur(3px)", // Add blur on hover
    },
    "& .card-content": {
      transform: "translateY(0)",
    },
  },
}));

const CardBackground = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "transform 0.3s ease-in-out, filter 0.3s ease-in-out",
});

const CardContent = styled("div")({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  padding: "20px",
  background: "rgba(0,0,0,0.7)",
  color: "white",
  transform: "translateY(50%)", // Adjusted position
  transition: "transform 0.3s ease-in-out",
});

const StyledTypography = styled(Typography)({
  fontFamily: "'Playfair Display', serif",
  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
  position: "relative",
  top: 3, // Moved title up
});

const NextArrow = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: 20,
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,
  backgroundColor: "rgba(255,255,255,0.3)",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  width: 50, // Increased button size
  height: 50,
}));

const features = [
  {
    title: "Expert Stylists",
    description:
      "Our team of skilled barbers are passionate about delivering the perfect cut and style for every client.",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
  },
  {
    title: "Premium Services",
    description:
      "From classic cuts to modern styles, hot towel shaves to beard trims, we offer a full range of grooming services.",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
  },
  {
    title: "Relaxing Atmosphere",
    description:
      "Step into our stylish, comfortable space and enjoy a grooming experience like no other.",
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3",
  },
  {
    title: "Precision Grooming",
    description:
      "Experience the pinnacle of grooming precision with our state-of-the-art tools and techniques.",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
  },
  {
    title: "Customized Care",
    description:
      "Every client receives a personalized grooming plan tailored to their unique style and preferences.",
    image:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Timeless Traditions",
    description:
      "We blend time-honored barbering traditions with modern techniques for an unparalleled grooming experience.",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
  },
];

const FeatureSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const controls = useAnimation();
  const sliderRef = useRef(null);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      const timer = setTimeout(() => setAutoplay(false), 30000);
      return () => clearTimeout(timer);
    }
  }, [controls, inView]);

  const sliderSettings = {
    dots: false,
    arrows: false, // Disable default arrows
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <StyledSection ref={ref}>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <StyledSlider {...sliderSettings} ref={sliderRef}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardBackground
                className="card-background"
                style={{ backgroundImage: `url(${feature.image})` }}
              />
              <CardContent className="card-content">
                <StyledTypography variant="h4" gutterBottom>
                  {feature.title}
                </StyledTypography>
                <StyledTypography variant="body1">
                  {feature.description}
                </StyledTypography>
              </CardContent>
            </FeatureCard>
          ))}
        </StyledSlider>
        <NextArrow onClick={() => sliderRef.current.slickNext()}>
          <ArrowForwardIosIcon />
        </NextArrow>
      </Container>
    </StyledSection>
  );
};

export default FeatureSection;
