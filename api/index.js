import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

dotenv.config();

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection failed");
  });

import authRouter from "./routes/auth.route.js";
import sessionRouter from "./routes/session.route.js";
import paymentRoute from "./routes/payment.route.js";

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.JWT_SECRET));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.use("/api/auth", authRouter);
app.use("/api/session", sessionRouter);
app.use("/api/payment", paymentRoute);

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/dist/index.html"));
});

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  return res.status(status).json({
    success: false,
    message,
    status,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
