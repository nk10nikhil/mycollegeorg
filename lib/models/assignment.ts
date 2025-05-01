// This file defines the Assignment model for MongoDB

export interface Assignment {
  _id?: string
  title: string
  description: string
  courseId: string
  teacherId: string
  dueDate: Date
  totalMarks: number
  assignedDate: Date
  attachments?: string[] // URLs to attachment files
  submissions: {
    studentId: string
    submissionDate?: Date
    attachments?: string[]
    marks?: number
    feedback?: string
    status: "pending" | "submitted" | "late" | "graded"
  }[]
  createdAt: Date
  updatedAt: Date
}

// Sample schema for MongoDB
export const AssignmentSchema = {
  title: { type: String, required: true },
  description: { type: String, required: true },
  courseId: { type: String, required: true },
  teacherId: { type: String, required: true },
  dueDate: { type: Date, required: true },
  totalMarks: { type: Number, required: true },
  assignedDate: { type: Date, required: true },
  attachments: [{ type: String }],
  submissions: [
    {
      studentId: { type: String, required: true },
      submissionDate: { type: Date },
      attachments: [{ type: String }],
      marks: { type: Number },
      feedback: { type: String },
      status: { type: String, enum: ["pending", "submitted", "late", "graded"], default: "pending" },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}
