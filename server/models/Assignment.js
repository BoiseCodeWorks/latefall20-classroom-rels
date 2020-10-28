import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const Assignment = new Schema(
  {
    description: { type: String, required: true },
    requirements: [{ type: String }],
    value: { type: Number, required: true },
    subject: { type: ObjectId, ref: "Subject", required: true}
  },
  {
  timestamps: true, toJSON: { virtuals: true }
  }
)
export default Assignment