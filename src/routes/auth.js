import { Router } from "express";
import { AuthCrll } from "../controllers/auth.js";
import { wrapError, validatorHandler } from "../middlewares/index.js";
import { passportLocal } from "../utils/auth/index.js";
import { loginUserShema } from "../schemas/userSchema.js";

export const router = Router();

router.post(
  "/login",
  validatorHandler(loginUserShema, "body"),
  passportLocal,
  wrapError(AuthCrll.login)
);
