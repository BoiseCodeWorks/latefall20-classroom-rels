import BaseController from "../utils/BaseController"
import { studentsService } from "../services/StudentsService"
import { studentSubjectsService } from "../services/StudentSubjectsService";
export class StudentsController extends BaseController {
  constructor() {
    super("api/students");
    this.router
      .get("", this.getAll)
      .get("/:studentId", this.getOne)
      .get("/:studentId/subjects", this.getSubjectsByStudentId)
      .post("", this.create)
      .post("/:studentId/subjects/:subjectId", this.enroll)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getSubjectsByStudentId(req,res,next) {
    res.send(await studentSubjectsService.findSubjects(req.params.studentId))
  }
  async enroll(req, res, next) {
    let enrollment = {
      student: req.params.studentId,
      subject: req.params.subjectId
    }
    res.send(await studentSubjectsService.enroll(enrollment))
  }
  async getAll(req, res, next) {
    try {
      res.send(await studentsService.find());
    } catch (error) {
      next(error);
    }
  }
  async getOne(req, res, next) {
    try {
      res.send(await studentsService.findById(req.params.studentId));
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(await studentsService.create(req.body));
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      res.send(await studentsService.edit(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await studentsService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}