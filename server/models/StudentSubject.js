import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const StudentSubject = new Schema(
  {
   
    subject: { type: ObjectId, ref: "Subject"},
    student: { type: ObjectId, ref: "Student"}

  },
  {
  timestamps: true, toJSON: { virtuals: true }
  }
)
export default StudentSubject