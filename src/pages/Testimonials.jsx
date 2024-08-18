import React, { useRef } from "react";
import {
  Box,
  Typography,
  Container,
  Avatar,
  Rating,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import Slider from "react-slick";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Footer from "../components/Footer";

const StyledSection = styled(Box)(({ theme }) => ({
  padding: "100px 0",
  background: "#FFFFFF",
  color: "#000000",
}));

const testimonials = [
  {
    name: "John Doe",
    role: "Regular Customer",
    avatar: "https://i.pravatar.cc/150?img=1",
    content:
      "I've been coming to FabroCutz for years, and I'm always impressed by their attention to detail and friendly service.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "First-time Visitor",
    avatar: "https://i.pravatar.cc/150?img=5",
    content:
      "My first experience at FabroCutz was fantastic! The stylist really listened to what I wanted and delivered a great cut.",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    role: "Monthly Subscriber",
    avatar: "https://i.pravatar.cc/150?img=8",
    content:
      "The premium services at FabroCutz are worth every penny. I always leave feeling refreshed and looking sharp.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Occasional Client",
    avatar: "https://i.pravatar.cc/150?img=9",
    content:
      "I love the relaxing atmosphere at FabroCutz. It's not just a haircut, it's a full grooming experience.",
    rating: 4,
  },
];

const TestimonialCard = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: "#FFFFFF",
  borderRadius: theme.spacing(2),
  textAlign: "center",
  margin: "0 15px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Deeper box shadow
}));

const QuoteIcon = styled(FormatQuoteIcon)(({ theme }) => ({
  fontSize: "3rem",
  color: "#808080",
  marginBottom: theme.spacing(2),
}));

const ClientInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: theme.spacing(3),
}));

const ClientAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
  marginRight: theme.spacing(2),
}));

const NextArrow = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: 20,
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,
  backgroundColor: "rgba(0,0,0,0.3)",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  width: 50,
  height: 50,
}));

// const PrevArrow = styled(IconButton)(({ theme }) => ({
//   position: "absolute",
//   left: 20,
//   top: "50%",
//   transform: "translateY(-50%)",
//   zIndex: 2,
//   backgroundColor: "rgba(0,0,0,0.3)",
//   color: "#FFFFFF",
//   "&:hover": {
//     backgroundColor: "rgba(0,0,0,0.5)",
//   },
//   width: 50,
//   height: 50,
// }));

const Testimonials = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <StyledSection>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              color="black"
              fontFamily="Curlz MT"
            >
              What Our Clients Say
            </Typography>
            <Typography variant="h5" align="center" paragraph color="black">
              Don't just take our word for it - hear from our satisfied
              customers
            </Typography>
          </motion.div>
          <Box mt={8} position="relative">
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index}>
                  <TestimonialCard
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Box>
                      <QuoteIcon />
                      <Typography variant="body1" paragraph color="black">
                        {testimonial.content}
                      </Typography>
                      <Rating value={testimonial.rating} readOnly />
                    </Box>
                    <ClientInfo>
                      <ClientAvatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <Box>
                        <Typography variant="subtitle1" color="black">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="subtitle2" color="black">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </ClientInfo>
                  </TestimonialCard>
                </div>
              ))}
            </Slider>
            {/* <PrevArrow onClick={() => sliderRef.current.slickPrev()}>
              <ArrowBackIosIcon />
            </PrevArrow> */}
            <NextArrow onClick={() => sliderRef.current.slickNext()}>
              <ArrowForwardIosIcon />
            </NextArrow>
          </Box>
        </Container>
      </StyledSection>
      <Footer />
    </>
  );
};

export default Testimonials;
