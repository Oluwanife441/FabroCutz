import React, { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import BookingForm from "./BookingForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DottedButton = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = (formData) => {
    setLoading(true);
    fetch("http://localhost:5000/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        setLoading(false);
        if (response.ok) {
          toast.success("Booking sent successfully");
        } else {
          toast.error("Error sending email");
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Error sending email");
      });
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        disabled={loading}
        sx={{
          borderRadius: "2rem",
          border: "2px dashed white",
          background: "linear-gradient(45deg, #8b4513 30%, #d2691e 90%)",
          padding: "0.75rem 1.5rem",
          fontWeight: 600,
          textTransform: "uppercase",
          color: "white",
          transition: "all 0.3s",
          cursor: "pointer",
          "&:hover": {
            transform: "translate(-4px, -4px)",
            borderRadius: "0.25rem",
            boxShadow: "4px 4px 0px black",
          },
          "&:active": {
            transform: "translate(0, 0)",
            borderRadius: "2rem",
            boxShadow: "none",
          },
        }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Book Now"}
      </Button>
      <BookingForm
        open={open}
        onClose={handleClose}
        onSubmit={handleFormSubmit}
      />
      <ToastContainer />
    </>
  );
};

export default DottedButton;
