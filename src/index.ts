import cors from "cors";
import express from "express";
import morgan from "morgan";
const app = express();
import config from "#config/config.js";
import { protect } from "#controllers/authHandler.js";
import { errorHandler } from "#middleware/expressErrorHandler.js";
import authRouter from "#routes/authRoutes.js";
import apiRouter from "#routes/index.js";
import cookieParser from "cookie-parser"

app.use(cookieParser())
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World fo Typescript");
});
app.use("/api", protect, apiRouter);
app.use("/auth", authRouter)

app.use(errorHandler); // Ensure errorHandler is called with all 4 arguments

app.listen(config.port, () => {
  console.log(`Budgeter app listening on port ${String(config.port)}`);
});
