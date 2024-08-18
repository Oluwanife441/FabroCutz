import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";
import { motion, AnimatePresence } from "framer-motion";

const WoodenAppBar = styled(AppBar)(({ theme }) => ({
  background: "linear-gradient(45deg, #8B4513 30%, #D2691E 90%)",
  boxShadow: "0 3px 5px 2px rgba(139, 69, 19, .3)",
  color: "#FFF",
}));

const WoodenButton = styled(Button)(({ theme }) => ({
  color: "#FFF",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

const Logo = styled(motion.div)(({ theme }) => ({
  flexGrow: 1,
  fontFamily: "Copperplate, Papyrus, fantasy",
  fontSize: "1.5rem",
  cursor: "pointer",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    background: "linear-gradient(45deg, #8B4513 30%, #D2691E 90%)",
    color: "#FFF",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "300px",
    },
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Services", path: "/services" },
    { text: "Testimonials", path: "/Testimonials" },
    { text: "About", path: "/about" },
    { text: "Contact", path: "/contact" },
  ];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <List>
      {menuItems.map((item, index) => (
        <motion.div
          key={item.text}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <ListItem
            button
            component={Link}
            to={item.path}
            onClick={toggleDrawer(false)}
            selected={location.pathname === item.path}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        </motion.div>
      ))}
    </List>
  );

  return (
    <HideOnScroll {...props}>
      <WoodenAppBar>
        <Toolbar>
          <Logo
            component={Link}
            to="/"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
            }}
          >
            <Typography
              variant="h4"
              fontFamily="Curlz MT"
              component={Link}
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              FabroCutz
            </Typography>
          </Logo>
          {isMobile ? (
            <>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(!drawerOpen)}
                >
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      key={drawerOpen ? "close" : "menu"}
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {drawerOpen ? <CloseIcon /> : <MenuIcon />}
                    </motion.div>
                  </AnimatePresence>
                </IconButton>
              </motion.div>
              <StyledDrawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ position: "absolute", top: "10px", right: "10px" }}
                >
                  <IconButton color="inherit" onClick={toggleDrawer(false)}>
                    <CloseIcon />
                  </IconButton>
                </motion.div>
                {list()}
              </StyledDrawer>
            </>
          ) : (
            <>
              {menuItems.map((item) => (
                <WoodenButton
                  key={item.text}
                  color="inherit"
                  component={Link}
                  to={item.path}
                  selected={location.pathname === item.path}
                >
                  {item.text}
                </WoodenButton>
              ))}
            </>
          )}
        </Toolbar>
      </WoodenAppBar>
    </HideOnScroll>
  );
};

export default Header;
