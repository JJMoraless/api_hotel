import { Router } from "express";
import { UserCrll } from "../controllers/users.js";
import { wrapError } from "../middlewares/errorsHandler.js";
import { postUserShema, putUserShema } from "../schemas/userSchema.js";
import { validatorHandler } from "../middlewares/shemasHandler.js";
export const router = Router();

router.post(
  "/",
  validatorHandler(postUserShema, "body"),
  wrapError(UserCrll.create)
);

router.put(
  "/:id",
  validatorHandler(putUserShema, "body"),
  wrapError(UserCrll.update)
);


router.get("/", wrapError(UserCrll.get));
router.get("/:id", wrapError(UserCrll.getById));
