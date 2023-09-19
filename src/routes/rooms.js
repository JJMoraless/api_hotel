import { Router } from "express";
import { wrapError } from "../middlewares/errorsHandler.js";
import { RoomCrll } from "../controllers/rooms.js";

export const router = Router();

router.get("/", wrapError(RoomCrll.get));
router.get("/available", wrapError(RoomCrll.getAvailable));
