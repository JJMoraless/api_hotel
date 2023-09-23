import { Router } from "express";
import { AuthCrll } from "../controllers/auth.js";
import { wrapError } from "../middlewares/errorsHandler.js";
import { passportLocal } from "../utils/auth/index.js";
import { validatorHandler } from "../middlewares/shemasHandler.js";
import { loginUserShema } from "../schemas/userShema.js";
import { postConsumableShema } from "../schemas/consumableShema.js";
import { ConsumableCrll } from "../controllers/products.js";

export const router = Router();

router.post(
  "/",
  validatorHandler(postConsumableShema, "body"),
  wrapError(ConsumableCrll.create)
);

router.get(
  "/",
  wrapError(ConsumableCrll.get)
);
