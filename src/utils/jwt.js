import jwt from "jsonwebtoken";
import { promisify } from "util";
import "dotenv/config";
const JWT_SECRET = process.env.JWT_SECRET;

const asyncVerify = promisify(jwt.verify);
const asyncSign = promisify(jwt.sign);

export const createToken = async (payload) => {
  const token = await asyncSign(payload, JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};

export const verifyToken = async (jwToken) => {
  try {
    const payload = await asyncVerify(jwToken, JWT_SECRET);
    return payload;
  } catch (error) {
    return false;
  }
};
