import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors"
class StudentsService {
  async delete(studentId) {
    let exists = await this.findById(studentId)
    if (!exists) {
      throw new BadRequest("This is not the student you are looking for.")
    }
    await dbContext.Students.findByIdAndDelete(studentId)
    return "succesfully deleted"
  }
  async edit(studentId, body) {
    let exists = await this.findById(studentId)
    if (!exists) {
      throw new BadRequest("This is not the student you are looking for.")
    }
    return await dbContext.Students.findByIdAndUpdate(studentId, body, { new: true })
  }
  async find(query = {}) {
    return await dbContext.Students.find(query)
  }
  async create(body) {
    return await dbContext.Students.create(body)
  }

  async findById(id) {
    return await dbContext.Students.findById(id)
  }

}
export const studentsService = new StudentsService();