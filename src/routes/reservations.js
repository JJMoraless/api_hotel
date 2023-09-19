import { Router } from "express";
import { wrapError } from "../middlewares/errorsHandler.js";
import { validatorHandler } from "../middlewares/shemasHandler.js";

import {
  getShemaReservation,
  postReservationSchema,
} from "../schemas/reservationShema.js";

import { ReservationCrll } from "../controllers/reservations.js";

export const router = Router();

router.post(
  "/",
  validatorHandler(postReservationSchema, "body"),
  wrapError(ReservationCrll.create)
);

router.get("/", wrapError(ReservationCrll.get));

router.get(
  "/:id/estadia",
  validatorHandler(getShemaReservation, "params"),
  wrapError(ReservationCrll.getById)
);

router.get(
  "/:id",
  validatorHandler(getShemaReservation, "params"),
  wrapError(ReservationCrll.getById)
);
