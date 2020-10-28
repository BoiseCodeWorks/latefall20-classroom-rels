import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors"
class SubjectsService {
  async delete(subjectId) {
    let exists = await this.findById(subjectId)
    if (!exists) {
      throw new BadRequest("This is not the subject you are looking for.")
    }
    await dbContext.Subjects.findByIdAndDelete(subjectId)
    return "succesfully deleted"
  }
  async edit(subjectId, body) {
    let exists = await this.findById(subjectId)
    if (!exists) {
      throw new BadRequest("This is not the subject you are looking for.")
    }
    return await dbContext.Subjects.findByIdAndUpdate(subjectId, body, { new: true })
  }
  async find(query = {}) {
    return await dbContext.Subjects.find(query).populate("teacher")
  }
  async create(body) {
    return await dbContext.Subjects.create(body)
  }

  async findById(id) {
    return await dbContext.Subjects.findById(id).populate("teacher")
  }

}
export const subjectsService = new SubjectsService();