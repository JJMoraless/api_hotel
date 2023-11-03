import { Router } from "express";
import { wrapError } from "../middlewares/errorsHandler.js";
import { validatorHandler } from "../middlewares/shemasHandler.js";
import {
  getSchemaAssistance,
  postShemaAssistance,
} from "../schemas/assistanceSchema.js";
import { AssistanceCrll } from "../controllers/assistance.js";
import { passportJwt } from "../utils/auth/index.js";
export const router = Router();

router.post(
  "/",
  passportJwt,
  validatorHandler(postShemaAssistance, "body"),
  wrapError(AssistanceCrll.create)
);

router.put(
  "/:id",
  passportJwt,
  validatorHandler(getSchemaAssistance, "params"),
  wrapError(AssistanceCrll.put)
);

router.get("/", passportJwt, wrapError(AssistanceCrll.get));
