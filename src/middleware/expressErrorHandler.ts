import { NextFunction, Request, Response } from "express";

export interface IAppError extends Error {
  status?: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (err: IAppError, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(err.status ?? 500).json({
    message: err.message || "Internal Server Error",
    stack: err.stack?.split("\n"),
  });
};
