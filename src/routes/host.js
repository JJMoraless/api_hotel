import { Router } from "express";
import { wrapError } from "../middlewares/errorsHandler.js";
import { HostCrll } from "../controllers/host.js";
import { postShemaHost } from "../schemas/hostShema.js";
import { validatorHandler } from "../middlewares/shemasHandler.js";

export const router = Router();

router.post(
  "/",
  validatorHandler(postShemaHost, "body"),
  wrapError(HostCrll.create)
);



router.get(
  "/",
  wrapError(HostCrll.get)
);
