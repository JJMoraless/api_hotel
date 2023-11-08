import {Router} from 'express'
import {wrapError} from '../middlewares/errorsHandler.js'
import {RoomCrll} from '../controllers/rooms.js'
import {validatorHandler} from '../middlewares/shemasHandler.js'
import {
  addConsumableSchema,
  getRoomSchema,
  putRoomSchema,
} from '../schemas/roomSchema.js'

export const router = Router()
router.get('/', wrapError(RoomCrll.get))
router.get('/available', wrapError(RoomCrll.getAvailable))

router.post(
  '/add-consumable',
  validatorHandler(addConsumableSchema, 'body'),
  wrapError(RoomCrll.addConsumable),
)

router.put(
  '/:id',
  validatorHandler(getRoomSchema, 'params'),
  validatorHandler(putRoomSchema, 'body'),
  wrapError(RoomCrll.put),
)

router.get('/:id', wrapError(RoomCrll.getByIdOccupied))

router.get('/:id/consumables', wrapError(RoomCrll.getByIdWithConsumables))
