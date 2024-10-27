import express from "express";
import "dotenv/config";
import morgan from "morgan";
import router from "./routes/auth.router.js";
import cookieParser from "cookie-parser";
import taskrouter from "./routes/task.router.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { swaggerDocs } from "./docs/swagger.js";

const app = express();

//Swagger
const swaggerSpec = swaggerJSDoc({
  definition: swaggerDocs,
  apis: ["./src/routes/*.js"],
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/", router);
app.use("/api", taskrouter);

export default app;
