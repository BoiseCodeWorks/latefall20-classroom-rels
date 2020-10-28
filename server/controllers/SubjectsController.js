import BaseController from "../utils/BaseController"
import { subjectsService } from "../services/SubjectsService"
import { assignmentsService } from "../services/AssignmentsService";
export class SubjectsController extends BaseController {
  constructor() {
    super("api/subjects");
    this.router
      .get("", this.getAll)
      .get("/:subjectId", this.getOne)
      .get("/:subjectId/assignments", this.getAssignmentsBySubjectId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
 async getAssignmentsBySubjectId(req, res, next) {
    try {
      res.send(await assignmentsService.getAssignmentsBySubjectId(req.params.subjectId))
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      res.send(await subjectsService.find());
    } catch (error) {
      next(error);
    }
  }
  async getOne(req, res, next) {
    try {
      res.send(await subjectsService.findById(req.params.subjectId));
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(await subjectsService.create(req.body));
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      res.send(await subjectsService.edit(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await subjectsService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}