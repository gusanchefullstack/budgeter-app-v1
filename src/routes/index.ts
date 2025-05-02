import { Router } from "express";

import transactionRouter from "./transactionRoutes.js";

const apiRouter = Router();

apiRouter.use("/transactions", transactionRouter)

export default apiRouter;