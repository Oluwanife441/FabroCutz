import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const StyledFooter = styled(Box)(({ theme }) => ({
  background: "linear-gradient(45deg, #8b4513 30%, #d2691e 90%)",
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(6, 0),
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    color: theme.palette.secondary.main,
    transform: "scale(1.2)",
  },
}));

const ContactItem = styled(motion.a)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
  transition: "all 0.3s ease-in-out",
  cursor: "pointer",
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    transform: "translateX(10px)",
  },
}));

const AnimatedTypography = styled(motion.div)(({ theme }) => ({
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const MapContainer = styled(Box)({
  width: "100%",
  height: "200px",
  marginBottom: "20px",
  borderRadius: "8px",
  overflow: "hidden",
});

const Footer = () => {
  return (
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatedTypography>
                <Typography
                  variant="h4"
                  gutterBottom
                  fontFamily="French Script MT"
                >
                  FabroCutz
                </Typography>
              </AnimatedTypography>
              <AnimatedTypography>
                <Typography variant="body2">
                  Providing top-notch grooming services since 2010.
                </Typography>
              </AnimatedTypography>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AnimatedTypography>
                <Typography
                  variant="h4"
                  gutterBottom
                  fontFamily="French Script MT"
                >
                  Contact Us
                </Typography>
              </AnimatedTypography>
              <ContactItem href="tel:+1234567890" whileHover={{ x: 10 }}>
                <PhoneIcon sx={{ mr: 1 }} />
                <Typography variant="body2">(123) 456-7890</Typography>
              </ContactItem>
              <ContactItem
                href="mailto:info@havenbarbers.com"
                whileHover={{ x: 10 }}
              >
                <EmailIcon sx={{ mr: 1 }} />
                <Typography variant="body2">info@obmbarbs.com</Typography>
              </ContactItem>
              <ContactItem
                href="https://www.google.com/maps/search/?api=1&query=123+Main+St,+Anytown,+USA"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
              >
                <LocationOnIcon sx={{ mr: 1 }} />
                <Typography variant="body2">
                  123 Main St, Anytown, USA
                </Typography>
              </ContactItem>
              <MapContainer>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573404934!2d-73.98509668459317!3d40.74844097932751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1628716703405!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </MapContainer>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <AnimatedTypography>
                <Typography
                  variant="h4"
                  gutterBottom
                  fontFamily="French Script MT"
                >
                  Follow Us
                </Typography>
              </AnimatedTypography>
              <Box>
                <SocialIcon
                  aria-label="Facebook"
                  component={Link}
                  href="https://facebook.com"
                >
                  <FacebookIcon />
                </SocialIcon>
                <SocialIcon
                  aria-label="Instagram"
                  component={Link}
                  href="https://instagram.com"
                >
                  <InstagramIcon />
                </SocialIcon>
                <SocialIcon
                  aria-label="Twitter"
                  component={Link}
                  href="https://twitter.com"
                >
                  <TwitterIcon />
                </SocialIcon>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
        <Box mt={5}>
          <AnimatedTypography>
            <Typography
              variant="body2"
              align="center"
              fontFamily="Old English Text MT"
            >
              © {new Date().getFullYear()} FabroCutz. All rights reserved.
            </Typography>
          </AnimatedTypography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
