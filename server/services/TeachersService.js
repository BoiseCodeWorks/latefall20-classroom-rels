import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors"
class TeachersService {
  async delete(teacherId) {
    let exists = await this.findById(teacherId)
    if (!exists) {
      throw new BadRequest("This is not the teacher you are looking for.")
    }
    await dbContext.Teachers.findByIdAndDelete(teacherId)
    return "succesfully deleted"
  }
  async edit(teacherId, body) {
    let exists = await this.findById(teacherId)
    if (!exists) {
      throw new BadRequest("This is not the teacher you are looking for.")
    }
    return await dbContext.Teachers.findByIdAndUpdate(teacherId, body, { new: true })
  }
  async find(query = {}) {
    return await dbContext.Teachers.find(query).populate("subject")
  }
  async create(body) {
    return await dbContext.Teachers.create(body)
  }

  async findById(id) {
    return await dbContext.Teachers.findById(id).populate("subject")
  }

}
export const teachersService = new TeachersService();