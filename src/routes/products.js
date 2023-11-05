import { Router } from 'express'
import { wrapError } from '../middlewares/errorsHandler.js'
import { passportLocal } from '../utils/auth/index.js'
import { validatorHandler } from '../middlewares/shemasHandler.js'
import {
  getProductShema,
  postProduct,
  putProductShema,
} from '../schemas/productSchema.js'
import { ProductCrll } from '../controllers/products.js'

export const router = Router()

router.post(
  '/',
  validatorHandler(postProduct, 'body'),
  wrapError(ProductCrll.create)
)

router.put(
  '/:id',
  validatorHandler(getProductShema, 'params'),
  validatorHandler(putProductShema, 'body'),
  wrapError(ProductCrll.update)
)

router.delete(
  '/:id',
  validatorHandler(getProductShema, 'params'),
  wrapError(ProductCrll.delete)
)

router.get('/', wrapError(ProductCrll.get))
