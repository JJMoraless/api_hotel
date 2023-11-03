import { request } from "express";
import { resOk } from "../utils/functions.js";
import { hash } from "bcrypt";
import { ClientError } from "../utils/errors.js";
import { models } from "../libs/sequelize.js";
import { Op } from "sequelize";

export class UserCrll {
  static async create(req = request, res) {
    const userFound = await models.User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (userFound) throw new ClientError("Email already exists");

    const userCreated = await models.User.create({
      ...req.body,
      password: await hash(req.body.password, 10),
      role: "aprendiz",
    });
    delete userCreated.dataValues.password;

    resOk(res, { user: userCreated });
  }

  static async get(req = request, res) {
    let { page = 0, limit = 400, document, ficha, state } = req.query;
    page = Number(page);
    limit = Number(limit);

    const options = {
      offset: page ? limit * page : 0,
      limit,
      attributes: {
        exclude: ["password"],
      },
    };

    options.where = {};
    if (document) options.where.document = document;
    if (ficha) options.where.ficha = ficha;
    if (state) options.where.state = state;

    const usersFound = await models.User.findAll(options);
    resOk(res, { users: usersFound });
  }

  static async update(req = request, res) {
    const id = Number(req.params.id);
    const userFoundValidateEmail = await models.User.findOne({
      where: {
        email: req.body.email,
        id: {
          [Op.ne]: id,
        },
      },
    });

    if (userFoundValidateEmail) throw new ClientError("Email already exists");

    await models.User.update(
      { ...req.body },
      {
        where: {
          id,
        },
      }
    );

    const userFound = await models.User.findByPk(id);
    resOk(res, { user: userFound });
  }

  static async getById(req = request, res) {
    const id = Number(req.params.id);
    const userFound = await models.User.findByPk(id);
    resOk(res, { user: userFound });
  }


  static async delete(res, req = request) {}
}
