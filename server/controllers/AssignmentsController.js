import BaseController from "../utils/BaseController"
import { assignmentsService } from "../services/AssignmentsService"
export class AssignmentsController extends BaseController {
  constructor() {
    super("api/assignments");
    this.router
      .get("", this.getAll)
      .get("/:assignmentId", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      res.send(await assignmentsService.find());
    } catch (error) {
      next(error);
    }
  }
  async getOne(req, res, next) {
    try {
      res.send(await assignmentsService.findById(req.params.assignmentId));
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(await assignmentsService.create(req.body));
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      res.send(await assignmentsService.edit(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await assignmentsService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}