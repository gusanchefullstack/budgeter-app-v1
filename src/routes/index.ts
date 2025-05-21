import { Router } from "express";

import budgetRouter from "./budgetRoutes.js";
import transactionRouter from "./transactionRoutes.js";

const apiRouter = Router();

apiRouter.use("/transactions", transactionRouter)
apiRouter.use("/budget", budgetRouter )

export default apiRouter;