// This file defines the Attendance model for MongoDB

export interface Attendance {
  _id?: string
  courseId: string
  date: Date
  teacherId: string
  students: {
    studentId: string
    present: boolean
    remarks?: string
  }[]
  section: string
  createdAt: Date
  updatedAt: Date
}

// Sample schema for MongoDB
export const AttendanceSchema = {
  courseId: { type: String, required: true },
  date: { type: Date, required: true },
  teacherId: { type: String, required: true },
  students: [
    {
      studentId: { type: String, required: true },
      present: { type: Boolean, required: true },
      remarks: { type: String },
    },
  ],
  section: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}
