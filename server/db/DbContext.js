import ValueSchema from "../models/Value";
import TeacherSchema from "../models/Teacher";
import StudentSchema from "../models/Student";
import AssignmentSchema from "../models/Assignment";
import SubjectSchema from "../models/Subject";
import StudentSubjectSchema from "../models/StudentSubject";



import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Assignments = mongoose.model("Assignment", AssignmentSchema);
  Students = mongoose.model("Student", StudentSchema);
  Subjects = mongoose.model("Subject", SubjectSchema);
  Teachers = mongoose.model("Teacher", TeacherSchema);
  Enrollments = mongoose.model("Enrollment", StudentSubjectSchema);


}

export const dbContext = new DbContext();
