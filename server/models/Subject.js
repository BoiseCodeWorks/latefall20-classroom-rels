import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Subject = new Schema(
  {
    description: { type: String, required: true },
    name: { type: String, required: true },
    teacher: { type: ObjectId, ref: "Teacher"}

  },
  {
  timestamps: true, toJSON: { virtuals: true }
  }
)
export default Subject