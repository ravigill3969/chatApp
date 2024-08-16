import express from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectDB from "./db.js";

config();

cors({
  origin: "http://localhost:3000",
  credentials: true,
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

const PORT = process.env.PORT || 8000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}  🤡`);
});
