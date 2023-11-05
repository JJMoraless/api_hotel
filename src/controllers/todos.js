import { request } from "express";
import { resOk } from "../utils/functions.js";
import { models } from "../libs/sequelize.js";

export class TodoCrll {
  static async create(req = request, res) {
    const dataReq = req.body;
    const todo = await models.Todo.create(dataReq);
    resOk(res, { todo: todo });
  }

  static async getById(req = request, res) {
    const { id } = req.params;
    const todo = await models.Todo.findByPk(parseInt(id));
    resOk(res, { todo });
  }

  static async put(req = request, res) {
    const { id } = req.params;
    const dataReq = req.body;

    await models.Todo.update(dataReq, {
      where: {
        id: parseInt(id),
      },
    });

    const todo = await models.Todo.findByPk(parseInt(id));
    resOk(res, { todo });
  }

  static async get(req = request, res) {
    const todos = await models.Todo.findAll();
    resOk(res, { todos });
  }

  static async delete(req = request, res) {
    const { id } = req.params;
    // find todo
    const todoDeleted = await models.Todo.destroy({
      where: {
        id: parseInt(id),
      },
    });
    
    resOk(res, { todo: todoDeleted });
  }
}
