import {Op} from 'sequelize'
import {models} from '../libs/sequelize.js'

export const getRoomsAvailable = async (inicio, fin) => {
  const roomsAvaible = await models.Room.findAll({
    include: [
      {
        model: models.Reservation,
        as: 'reservations',
        required: false,
        where: {
          [Op.and]: [
            {
              date_entry: {[Op.gte]: inicio},
            },
            {
              date_output: {[Op.lte]: fin},
            },
          ],
        },
      },
    ],
    where: {
      '$reservations.id$': {[Op.is]: null},
    },
  })
  return roomsAvaible
}
