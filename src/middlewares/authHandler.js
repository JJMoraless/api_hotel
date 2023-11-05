import { verifyToken } from "../utils/jwt.js";
import { ClientError } from "../utils/errors.js";

export const authHandler = (req, res, next) => {
  const authToken = req.cookies.token;
  if (!authToken) {
    throw new ClientError("No token found");
  }

  const userPayload = verifyToken(authToken);
  if (!userPayload) {
    throw new ClientError("Invalid token");
  }

  req.user = userPayload;
  next();
};
