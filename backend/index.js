import express from "express";
import bodyParser from "body-parser";
import sendMailRoute from "./sendMail.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", sendMailRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
