import { verifyToken } from "../utils/jwt.js";
import { ClientError } from "../utils/errors.js";

export const authHandler = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    throw new ClientError("token not found");
  }

  const payload = verifyToken(token);
  if (!payload) {
    throw new ClientError("token incorrect");
  }

  req.user = payload;
  next();
};
