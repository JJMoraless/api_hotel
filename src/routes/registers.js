import { Router } from "express";
import { wrapError } from "../middlewares/errorsHandler.js";
import { RegisterCrll } from "../controllers/registers.js";

export const router = Router();

router.get("/", wrapError(RegisterCrll.get));
router.get("/:id", wrapError(RegisterCrll.getById));



// router.post("/", wrapError(RegisterCrll.get));
