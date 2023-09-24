import { Router } from "express";
import { wrapError } from "../middlewares/errorsHandler.js";
import { RegisterCrll } from "../controllers/registers.js";
import { validatorHandler } from "../middlewares/shemasHandler.js";
import {
  addProductShema,
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
  validatorHandler(addProductShema, "body"),
  wrapError(RegisterCrll.addConsumable)
);

router.get("/:id/products", wrapError(RegisterCrll.getByIdWithProducts));

router.get("/:id", wrapError(RegisterCrll.getById));
router.get("/", wrapError(RegisterCrll.get));
