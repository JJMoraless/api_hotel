import { Router } from "express";
import { wrapError } from "../middlewares/errorsHandler.js";
import { validatorHandler } from "../middlewares/shemasHandler.js";
import {
  getShemaReservation,
  postReservationSchema,
  putReservationSchema,
} from "../schemas/reservationSchema.js";
import { ReservationCrll } from "../controllers/reservations.js";
import { passportJwt } from "../utils/auth/index.js";

export const router = Router();

router.post(
  "/",
  validatorHandler(postReservationSchema, "body"),
  wrapError(ReservationCrll.create)
);

router.get("/", passportJwt, wrapError(ReservationCrll.get));

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

router.put(
  "/:id",
  validatorHandler(putReservationSchema, "body"),
  wrapError(ReservationCrll.update)
);

router.delete(
  "/:id",
  validatorHandler(putReservationSchema, "body"),
  wrapError(ReservationCrll.delete)
);
