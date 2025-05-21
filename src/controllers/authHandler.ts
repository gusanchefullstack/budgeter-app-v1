import { createAccessToken, createRefreshToken, validateToken } from "#modules/auth.js";
import { IBodyUser } from "#types/authUser.js";
import { compare, hash } from "bcryptjs";
import { NextFunction, Request, Response } from "express";

import { prisma } from "../db.js";

export const registerHandler = async (req: Request, res: Response, next: NextFunction) => {
  const { password, username } = req.body as IBodyUser;

  try {
    const hashedPassword: string = await hash(password, 10);

    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (user) res.status(409).json({ message: "User exists" });
    else {
      const newUser = await prisma.user.create({
        data: {
          password: hashedPassword,
          username,
        },
      });
      res.status(200).json(newUser);
    }
  } catch (error) {
    next(error);
  }
};

export const loginHandler = async (req: Request, res: Response, next: NextFunction) => {
  const { password, username } = req.body as IBodyUser;

  try {
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (!user) res.status(409).json({ message: "User doesn't exists" });
    else {
      const validPassword = await compare(password, user.password);
      if (!validPassword) res.status(401).json({ message: "Invalid password" });
      else {
        //generate tokens: access and refress tokens
        const accessToken = createAccessToken(user.id);
        // const refreshToken = createRefreshToken(user.id);
        // await prisma.user.update({
        //   data: {
        //     refreshToken,
        //   },
        //   where: {
        //     id: user.id,
        //   },
        // });
        // res.cookie("refreshToken", refreshToken, { httpOnly: true, maxAge: 900000, path: "/refresh_token" });
        // console.log(refreshToken)
        res.json({ accessToken: accessToken });
      }
    }
  } catch (error) {
    next(error);
  }
};

export const logoutHandler = (req: Request, res: Response, next: NextFunction) => {
  res.clearCookie("refreshToken", { path: "/refresh_token" });

  try {
    res.json({ message: "Logged out" });
  } catch (error) {
    next(error);
  }
};

export const protect = (req: Request, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization;
  if (!bearer) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const token = bearer.split(" ")[1];
  if (!token) {
    res.status(401).json({ message: "Not a valid token" });
    return;
  }

  try {
    const user = validateToken(token);
    req.user = user as { userId: string };
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Not a valid token" });
    return;
  }
};
