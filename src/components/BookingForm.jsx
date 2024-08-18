import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Grid,
  CircularProgress,
  useMediaQuery,
  useTheme,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { DateTimePicker, MobileDateTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "../style.css";

const BookingForm = ({ open, onClose, onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
    phone: "",
    date: dayjs(),
    service: "",
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date,
    });
  };

  const handleSubmit = () => {
    // Check if all required fields are filled
    if (
      !formData.name ||
      !formData.email ||
      !formData.address ||
      !formData.message ||
      !formData.phone ||
      !formData.date ||
      !formData.service
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    onSubmit(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Book an Appointment</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              name="name"
              type="text"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              label="Email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              label="Address"
              name="address"
              type="text"
              placeholder="123, St Street, Ontario, Canada."
              fullWidth
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              label="Message"
              name="message"
              type="text"
              fullWidth
              value={formData.message}
              placeholder="Hello, I'd love to book an appointment with you."
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              label="Phone"
              name="phone"
              type="text"
              fullWidth
              placeholder="+1 2345678901"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth margin="dense" required>
              <InputLabel id="service-label">Service</InputLabel>
              <Select
                labelId="service-label"
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                label="Service"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Service 1">Service 1</MenuItem>
                <MenuItem value="Service 2">Service 2</MenuItem>
                <MenuItem value="Service 3">Service 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {isMobile ? (
                <MobileDateTimePicker
                  label="Select date and time"
                  value={formData.date}
                  onChange={handleDateChange}
                  renderInput={(params) => (
                    <TextField {...params} fullWidth required />
                  )}
                />
              ) : (
                <DateTimePicker
                  label="Select date and time"
                  value={formData.date}
                  onChange={handleDateChange}
                  renderInput={(params) => (
                    <TextField {...params} fullWidth required />
                  )}
                />
              )}
            </LocalizationProvider>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          style={{ color: "white" }}
          className="dotted-button"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Submit"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookingForm;
