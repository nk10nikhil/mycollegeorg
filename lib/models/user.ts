// This file defines the User model for MongoDB

export interface User {
  _id?: string
  name: string
  email: string
  password: string // In a real app, this would be hashed
  role: "student" | "teacher" | "director" | "admin"
  department?: string
  rollNumber?: string // For students
  facultyId?: string // For teachers
  directorId?: string // For directors
  batch?: string // For students (e.g., "2021-2025")
  section?: string // For students (e.g., "A", "B")
  year?: number // For students (e.g., 1, 2, 3, 4)
  program?: string // For students (e.g., "B.Tech", "M.Tech")
  branch?: string // For students (e.g., "CSE", "ECE")
  createdAt: Date
  updatedAt: Date
}

// Sample schema for MongoDB
export const UserSchema = {
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ["student", "teacher", "director", "admin"] },
  department: { type: String },
  rollNumber: { type: String },
  facultyId: { type: String },
  directorId: { type: String },
  batch: { type: String },
  section: { type: String },
  year: { type: Number },
  program: { type: String },
  branch: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}
