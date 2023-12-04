import { request } from 'express'
import { hash } from 'bcrypt'
import cryptoRandomString from 'crypto-random-string'

// libs
import { models } from '../libs/sequelize.js'
import { transporter } from '../libs/nodemailer.js'

// utils
import { createToken } from '../utils/jwt.js'
import { resOk } from '../utils/functions.js'
import { ClientError } from '../utils/errors.js'

// en la ruta se usa local strategy que valida las credenciales
// local strategy agrega objeto user al request con los datos de la db

export class AuthCrll {
  static async login(req = request, res) {
    const { user } = req
    const token = await createToken({
      sub: user.id,
      role: user.role,
    })
    const asistance = await models.Assistance.create({ userId: user.id })
    res.cookie('token', token)
    resOk(res, { token, user, asistance })
  }

  static async forgotPassword(req = request, res) {
    const { email } = req.body

    const user = await models.User.findOne({
      where: {
        email,
      },
    })

    if (!user) {
      throw new ClientError('email no existe')
    }

    const codeReset = cryptoRandomString({ length: 7 })
    user.codeReset = codeReset
    await user.save()

    try {
      const resEmail = await transporter.sendMail({
        from: 'Dream5 🪄" <dream5@dreams.com>',
        to: email,
        subject: 'restableciminiento de contraseña',
        text: 'Hello world?',
        html: /*html*/ `
          <hr/>
          <body style="font-family: Arial, sans-serif; margin:0; padding:0"></body>
            <div style="max-width:600px; margin:0 auto; padding:20px;">
              <h1 style="color: #560080;">Hola,</h1>
              <p style="font-size: 16px; color: #666666;">
                Recibimos una solicitud para restablecer tu contraseña. 
                Si no hiciste esta solicitud, puedes ignorar este correo electrónico.
              </p>
              <p style="font-size: 16px; color: #666666;">
                De lo contrario, puedes restablecer tu contraseña usando este codigo:
              </p>
              <h1 style="color: #560080;">Restableciminiento de contraseña</h1>
              <p>Ingresa el siguiente codigo: ${codeReset}</p>
              <p style="font-size: 16px; color: #666666;">Gracias,</p>
              <p style="font-size: 16px; color: #666666;">El equipo de Jhon Morales</p>
            </div>
          </body>
        `,
      })
      resOk(res, { emailRes: resEmail })
    } catch (error) {
      console.log(error)
      throw new ClientError(res, { error }, 500)
    }
  }

  static async resetPassword(req = request, res) {
    const { code, password, email } = req.body

    const user = await models.User.findOne({
      where: {
        email,
      },
    })

    if (!user) {
      throw new ClientError('email no existe')
    }

    const userCodeReset = user.codeReset

    if (code !== userCodeReset) {
      throw new ClientError('codigo invalido')
    }

    const passwordHash = await hash(password, 10)
    const userUpdate = await models.User.update(
      { password: passwordHash, codeReset: null },
      {
        where: {
          email,
        },
      },
    )

    resOk(res, {
      user: userUpdate,
      message: 'contraseña actualizada con exito',
    })
  }
}
