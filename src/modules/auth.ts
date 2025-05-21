import config from "#config/config.js";
import jwt from "jsonwebtoken";

export const createAccessToken = (userId: string) => {
  return jwt.sign({ userId }, config.accessTokenSecret, { expiresIn: "1d" });
};

export const createRefreshToken = (userId: string) => {
  return jwt.sign({ userId }, config.accessTokenSecret, { expiresIn: "7d" });
};

export const validateToken = (token: string) => jwt.verify(token, config.accessTokenSecret);
