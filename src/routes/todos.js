import { Router } from 'express'
import { wrapError } from '../middlewares/errorsHandler.js'
import { TodoCrll } from '../controllers/todos.js'
import { validatorHandler } from '../middlewares/shemasHandler.js'
import {
  getTodoShema,
  postTodoShema,
  putTodoShema,
} from '../schemas/todoSchema.js'

export const router = Router()
router.get('/', wrapError(TodoCrll.get))

router.post(
  '/',
  validatorHandler(postTodoShema, 'body'),
  wrapError(TodoCrll.create)
)

router.put(
  '/:id',
  validatorHandler(getTodoShema, 'params'),
  validatorHandler(putTodoShema, 'body'),
  wrapError(TodoCrll.put)
)

router.get(
  '/:id',
  validatorHandler(getTodoShema, 'params'),
  wrapError(TodoCrll.getById)
)

router.delete(
  '/:id',
  validatorHandler(getTodoShema, 'params'),
  wrapError(TodoCrll.delete)
)
