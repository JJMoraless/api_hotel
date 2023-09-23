import { Router } from "express";
import { wrapError } from "../middlewares/errorsHandler.js";
import { RegisterCrll } from "../controllers/registers.js";
import { validatorHandler } from "../middlewares/shemasHandler.js";
import {
  addConsumableShema,
  postRegisterSchema,
} from "../schemas/registerSchema.js";
export const router = Router();

router.post(
  "/",
  validatorHandler(postRegisterSchema, "body"),
  wrapError(RegisterCrll.create)
);

router.post(
  "/add-consumable",
  validatorHandler(addConsumableShema, "body"),
  wrapError(RegisterCrll.addConsumable)
);

router.get("/:id", wrapError(RegisterCrll.getById));
router.get("/", wrapError(RegisterCrll.get));
