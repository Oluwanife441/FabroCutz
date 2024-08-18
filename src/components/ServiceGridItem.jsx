import React from "react";
import { Container, Typography, Grid, Box, Paper } from "@mui/material";
import { styled } from "@mui/system";

const ScrollingGrid = styled(Grid)`
  display: flex;
  overflow-x: hidden;
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 50px;
    height: 100%;
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, black, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, black, transparent);
  }
`;

const ScrollingContent = styled(Box)`
  display: flex;
  animation: scroll 30s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const ImageBox = styled(Box)`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 25px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
`;

const StyledImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const OverlayTypography = styled(Typography)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
`;

const services = [
  {
    name: "Classic Cut",
    image:
      "https://images.unsplash.com/photo-1590540179916-15643504417f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hot Towel Shave",
    image:
      "https://images.unsplash.com/photo-1653875700329-a7c8aca94c95?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Beard Trim",
    image:
      "https://images.unsplash.com/photo-1484291150605-0860ed671f04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hair Styling",
    image:
      "https://i.pinimg.com/736x/b2/c4/5d/b2c45d43141cd655f22b2df9b9d737dc.jpg",
  },
  {
    name: "Beard Oil",
    image:
      "https://i.pinimg.com/564x/ca/f7/1f/caf71f319ae8557ad763d82425d65a56.jpg",
  },
  {
    name: "Hair Extension",
    image:
      "https://i.pinimg.com/736x/f0/c7/fe/f0c7feb93fb523f41c3e523304e2bd8d.jpg",
  },
  {
    name: "Hair Wash",
    image:
      "https://i.pinimg.com/564x/fe/2a/69/fe2a6960850d5912bd29fe1074ad078f.jpg",
  },
];

const SignatureServices = () => (
  <Paper sx={{ backgroundColor: "black", color: "white", overflow: "hidden" }}>
    <Container>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        fontFamily="Curlz MT"
      >
        Our Signature Services
      </Typography>
      <ScrollingGrid>
        <ScrollingContent>
          {[...services, ...services].map((service, index) => (
            <ImageBox key={index}>
              <StyledImage src={service.image} alt={service.name} />
              <OverlayTypography variant="h5" align="center">
                {service.name}
              </OverlayTypography>
            </ImageBox>
          ))}
        </ScrollingContent>
      </ScrollingGrid>
    </Container>
  </Paper>
);

export default SignatureServices;
