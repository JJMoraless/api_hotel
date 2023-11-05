import { request } from 'express'
import { resOk } from '../utils/functions.js'
import { models } from '../libs/sequelize.js'
import { ClientError } from '../utils/errors.js'

export class RegisterCrll {
  static async create(req = request, res) {
    const { reservationId } = req.body

    await models.Reservation.update(
      { state: 'checkIn' },
      {
        where: {
          id: reservationId,
        },
      }
    )

    const registerCreated = await models.Register.create(req.body, {
      include: ['reservation'],
    })

    resOk(res, { register: registerCreated })
  }

  static async get(req = request, res) {
    let { page = 0, limit = 100 } = req.query
    page = parseInt(page)
    limit = parseInt(limit)

    const registersFound = await models.Register.findAll({
      offset: page ? limit * page : 0,
      limit,
      include: ['reservation'],
      order: [['id', 'DESC']],
    })

    resOk(res, { registers: registersFound })
  }

  static async getById(req = request, res) {
    const { id } = req.params
    const registerFound = await models.Register.findByPk(Number(id), {
      include: ['reservation', 'products', 'payments', 'companions'],
    })

    const totalProducts = registerFound.totalProducts
    const totalRoomPerDay = registerFound.totalRoomReserved
    const numCompanions = registerFound.companions.reduce(
      (acc, el) => acc + el,
      0
    )

    // const totalToPay = totalProducts + totalRoomPerDay - totalPayments;

    resOk(res, { register: registerFound })
  }

  static async getByIdWithProducts(req = request, res) {
    const { id } = req.params
    const registerFound = await models.Register.findByPk(parseInt(id), {
      include: [
        {
          model: models.Product,
          as: 'products',
        },
        {
          model: models.Reservation,
          as: 'reservation',
        },
      ],
    })

    resOk(res, { register: registerFound })
  }

  static async update(res, req = request) {
    resOk(res, {})
  }

  // static async addPayment(req = request, res) {
  //   const { registerId, amount, ...dataPayment } = await req.body;
  //   const register = await models.Register.findByPk(registerId, {
  //     include: [
  //       {
  //         model: models.Reservation,
  //         as: "reservation",
  //       },
  //       {
  //         model: models.Payment,
  //         as: "payments",
  //       },
  //       {
  //         model: models.Product,
  //         as: "products",
  //       },
  //     ],
  //   });

  //   let payments = await models.Payment.findAll({
  //     where: { registerId },
  //     raw: true,
  //   });

  //   const totalRoomPerDay = register.totalRoomReserved;
  //   const totalProducts = register.totalProducts;
  //   const netTotal = totalProducts + totalRoomPerDay;
  //   let totalPayments = payments.reduce((acc, el) => acc + el.amount, 0);
  //   const totalToPay = netTotal - totalPayments;
  //   const returnPay = !amount - totalToPay ? 0 : amount - totalToPay;
  //   const finalAmount = amount - returnPay;
  //   if (totalToPay) {
  //     await models.Payment.create({
  //       registerId,
  //       amount: finalAmount,
  //       ...dataPayment,
  //     });
  //   }

  //   payments = await models.Payment.findAll({
  //     where: { registerId },
  //     raw: true,
  //   });

  //   totalPayments = payments.reduce((acc, el) => acc + el.amount, 0);

  //   resOk(res, {
  //     payments,
  //     totalPayments,
  //     totalToPay,
  //     returnPay,
  //   });
  // }

  static async addPayment(req = request, res) {
    const { registerId, amount, ...dataPayment } = await req.body

    const register = await models.Register.findByPk(registerId, {
      include: [
        {
          model: models.Reservation,
          as: 'reservation',
        },
        {
          model: models.Payment,
          as: 'payments',
        },
        {
          model: models.Product,
          as: 'products',
        },
      ],
    })

    let payments = await models.Payment.findAll({
      where: { registerId },
      raw: true,
    })

    const totalRoomPerDay = register.totalRoomReserved
    const totalProducts = register.totalProducts
    const netTotal = totalProducts + totalRoomPerDay
    let totalPayments = payments.reduce((acc, el) => acc + el.amount, 0)
    let totalToPay = netTotal - totalPayments

    if (totalToPay > 0) {
      // Solo si hay saldo pendiente por pagar
      const finalAmount = Math.min(amount, totalToPay) // Asegura que no se pague más de lo que se debe
      await models.Payment.create({
        registerId,
        amount: finalAmount,
        ...dataPayment,
      })
    }

    payments = await models.Payment.findAll({
      where: { registerId },
      raw: true,
    })

    totalPayments = payments.reduce((acc, el) => acc + el.amount, 0)
    totalToPay = netTotal - totalPayments

    resOk(res, {
      payments,
      totalPayments,
      totalToPay,
      returnPay: 0,
    })
  }

  static async getPayments(req = request, res) {
    const id = Number(req.params.id)
    const register = await models.Register.findByPk(id, {
      include: ['payments', 'reservation', 'products'],
    })

    resOk(res, { register })
  }

  static async addCompanion(req = request, res) {
    const { registerId, companionId } = await req.body

    await models.RegisterCompanion.create({
      registerId,
      companionId,
    })

    const register = await models.Register.findByPk(registerId, {
      include: 'companions',
    })

    resOk(res, { register })
  }

  static async addConsumable(req = request, res) {
    const { productId, registerId, amount } = req.body

    // const register = await models.Register.findByPk(registerId, {
    //   include: {
    //     model: models.Reservation,
    //     as: "reservation",
    //     include: "room",
    //   },
    // });

    // const roomNumber = register.reservation.room.number;
    // const inventory = await models.Inventary.findOne({
    //   where: { productId, roomNumber },
    // });

    // if (!inventory) {
    //   throw new ClientError("not product in minibar" + roomNumber);
    // }

    // if (inventory.amount < amount) {
    //   throw new ClientError(
    //     "available " + inventory.amount + " products in stock"
    //   );
    // }

    // await models.Inventary.decrement(
    //   { amount },
    //   { where: { id: inventory.id } }
    // );

    const registerProduct = await models.RegisterProduct.findOne({
      where: { productId, registerId },
    })

    const product = await models.Product.findByPk(Number(productId))

    if (registerProduct) {
      await registerProduct.increment({ amount })
      // await registerProduct.update({ price: product.price });

      const registerProductUpdate = await models.RegisterProduct.findByPk(
        registerProduct.id
      )

      return resOk(res, {
        consumable: registerProductUpdate,
        // amount_available: inventory.amount - amount,
      })
    }

    const newRegisterConsumable = await models.RegisterProduct.create({
      ...req.body,
      price: product.price,
    })

    resOk(res, {
      consumable: newRegisterConsumable,
      // amount_available: inventory.amount - amount,
    })
  }

  static async delete(res, req = request) {}
}
