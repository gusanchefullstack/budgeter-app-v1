import cors from "cors";
import express from "express";
import morgan from "morgan";
const app = express();
import config from "#config/config.js";
import { errorHandler } from "#middleware/errorHandler.js";

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  throw new Error("Something went wrong");
  res.send("Hello World fo Typescript");
});

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Budgeter app listening on port ${String(config.port)}`);
});
