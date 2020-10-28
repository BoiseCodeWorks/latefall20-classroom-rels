import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Teacher = new Schema(
  {
    name: { type: String, required: true },
    subject: { type: ObjectId, ref: "Subject"}

  },
  {
  timestamps: true, toJSON: { virtuals: true }
  }
)
export default Teacher