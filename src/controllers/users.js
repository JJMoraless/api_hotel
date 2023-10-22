import { request } from "express";
import { resOk } from "../utils/functions.js";
import { hash } from "bcrypt";
import { ClientError } from "../utils/errors.js";
import { models } from "../libs/sequelize.js";

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
    });
    delete userCreated.dataValues.password;

    resOk(res, { user: userCreated });
  }

  static async get(req = request, res) {
    const { page: queryPage = 0, limit: queryLimit = 5 } = req.query;
    const page = Number(queryPage);
    const limit = Number(queryLimit);

    const usersFound = await models.User.findAll({
      offset: page ? limit * page : 0,
      limit,
      attributes: {
        exclude: ["password"],
      },
    });

    resOk(res, { users: usersFound });
  }

  static async update(req = request, res) {
    const  id  = Number(req.params.id);

    await models.User.update(
      { ...req.body },
      {
        where: {
          id,
        },
      }
    );


    const userFound = await models.User.findByPk()

    resOk(res, {user: userFound});
  }

  static async delete(res, req = request) {}
}
