import { Router } from "express";
import { UserCrll } from "../controllers/users.js";
import { wrapError } from "../middlewares/errorsHandler.js";
import { postUserShema } from "../schemas/userSchema.js";
import { validatorHandler } from "../middlewares/shemasHandler.js";

export const router = Router();

router.post(
  "/",
  validatorHandler(postUserShema, "body"),
  wrapError(UserCrll.create)
);

router.put(
  "/",
  validatorHandler(postUserShema, "body"),
  wrapError(UserCrll.update)
);


router.get("/", wrapError(UserCrll.get));
