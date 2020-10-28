import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors"
class AssignmentsService {
  async getAssignmentsBySubjectId(subjectId) {
    return await dbContext.Assignments.find({subject:subjectId}).populate("subject")
  }
  async delete(assignmentId) {
    let exists = await this.findById(assignmentId)
    if (!exists) {
      throw new BadRequest("This is not the assignment you are looking for.")
    }
    await dbContext.Assignments.findByIdAndDelete(assignmentId)
    return "succesfully deleted"
  }
  async edit(assignmentId, body) {
    let exists = await this.findById(assignmentId)
    if (!exists) {
      throw new BadRequest("This is not the assignment you are looking for.")
    }
    return await dbContext.Assignments.findByIdAndUpdate(assignmentId, body, { new: true })
  }
  async find(query = {}) {
    return await dbContext.Assignments.find(query).populate("subject")
  }
  async create(body) {
    return await dbContext.Assignments.create(body)
  }

  async findById(id) {
    return await dbContext.Assignments.findById(id)
  }

}
export const assignmentsService = new AssignmentsService();