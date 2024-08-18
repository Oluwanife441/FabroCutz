import dotenv from "dotenv";
import { Router } from "express";
import { createTransport } from "nodemailer";
import dayjs from "dayjs";

dotenv.config();

const router = Router();

router.post("/send-mail", async (req, res) => {
  const { name, email, address, message, phone, date, service } = req.body;

  const formattedDate = dayjs(date).format("MMMM D, YYYY h:mm A"); // Format date

  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Add this line if you are having TLS issues
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "New Appointment Booking",
    text: `
      Name: ${name}
      Email: ${email}
      Address: ${address}
      Message: ${message}
      Phone: ${phone}
      Date: ${formattedDate}
      Service: ${service}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error); // Log the error
    res.status(500).send("Error sending email: " + error.message);
  }
});

export default router;
