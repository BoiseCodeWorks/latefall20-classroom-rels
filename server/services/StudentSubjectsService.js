import {dbContext} from "../db/DbContext"
class StudentSubjectsService{
  async findSubjects(studentId) {
     return await dbContext.Enrollments.find({student: studentId}).populate("subject").populate("student")
   }
   async enroll(enrollment) {
    return await dbContext.Enrollments.create(enrollment)
  }


}
export const studentSubjectsService = new StudentSubjectsService();