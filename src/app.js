import express from "express";
import "dotenv/config";
import morgan from "morgan";
import router from "./routes/auth.router.js";
import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/auth", router);

export default app;
