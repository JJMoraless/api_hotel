import {Router} from 'express'
import {AuthCrll} from '../controllers/auth.js'
import {wrapError, validatorHandler} from '../middlewares/index.js'
import {passportLocal} from '../utils/auth/index.js'
import {
  authUserSchema,
  forgotPasswordSchema,
  loginUserShema,
} from '../schemas/userSchema.js'
import session from 'express-session'
export const router = Router()

router.use(session({secret: '123456', resave: true, saveUninitialized: true}))
router.post(
  '/login',
  validatorHandler(loginUserShema, 'body'),
  passportLocal,
  wrapError(AuthCrll.login),
)

router.post(
  '/forgot-password',
  validatorHandler(forgotPasswordSchema, 'body'),
  wrapError(AuthCrll.forgotPassword),
)

router.post(
  '/reset-password',
  validatorHandler(authUserSchema),
  wrapError(AuthCrll.resetPassword),
)
