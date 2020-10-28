import BaseController from "../utils/BaseController"
import { teachersService } from "../services/TeachersService"
export class TeachersController extends BaseController {
  constructor() {
    super("api/teachers");
    this.router
      .get("", this.getAll)
      .get("/:teacherId", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      res.send(await teachersService.find());
    } catch (error) {
      next(error);
    }
  }
  async getOne(req, res, next) {
    try {
      res.send(await teachersService.findById(req.params.teacherId));
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(await teachersService.create(req.body));
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      res.send(await teachersService.edit(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await teachersService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}