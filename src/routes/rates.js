import {Router} from 'express'
import {wrapError} from '../middlewares/errorsHandler.js'
import {RateCrll} from '../controllers/rates.js'
import {validatorHandler} from '../middlewares/shemasHandler.js'
import {
  getRateShema,
  postRateShema,
  putRateShema,
} from '../schemas/rateSchema.js'

export const router = Router()
router.get('/', wrapError(RateCrll.get))

router.post(
  '/',
  validatorHandler(postRateShema, 'body'),
  wrapError(RateCrll.create),
)

router.put(
  '/:id',
  validatorHandler(getRateShema, 'params'),
  validatorHandler(putRateShema, 'body'),
  wrapError(RateCrll.put),
)

router.get(
  '/:id',
  validatorHandler(getRateShema, 'params'),
  wrapError(RateCrll.getById),
)

router.delete(
  '/:id',
  validatorHandler(getRateShema, 'params'),
  wrapError(RateCrll.delete),
)
