import { loginHandler, logoutHandler, registerHandler } from "#controllers/authHandler.js";
import { inputValidator } from "#middleware/inputErrorHandler.js";
import { Router } from "express";
import { body } from "express-validator";

const authRouter = Router();

authRouter.post(
  "/register",
  body("username").exists().withMessage("Email is required").isEmail().withMessage("Username must be a valid email"),
  body("password").exists().withMessage("Password is required").isString().withMessage("Password must be a string "),
  inputValidator,
  registerHandler,
);
authRouter.post(
    "/login",
    body("username").exists().withMessage("Email is required").isEmail().withMessage("Username must be a valid email"),
    body("password").exists().withMessage("Password is required").isString().withMessage("Password must be a string "),
    inputValidator,
    loginHandler,
  );
  authRouter.post(
    "/logout",
    body("username").exists().withMessage("Email is required").isEmail().withMessage("Username must be a valid email"),
    body("password").exists().withMessage("Password is required").isString().withMessage("Password must be a string "),
    inputValidator,
    logoutHandler,
  );
export default authRouter;
