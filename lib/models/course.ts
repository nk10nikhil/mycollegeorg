// This file defines the Course model for MongoDB

export interface Course {
  _id?: string
  courseCode: string
  name: string
  description: string
  department: string
  credits: number
  semester: number
  year: number
  teachers: string[] // Array of teacher IDs
  students: string[] // Array of student IDs
  syllabus: {
    units: {
      title: string
      topics: string[]
      completed: boolean
    }[]
  }
  schedule: {
    day: string
    startTime: string
    endTime: string
    room: string
    section: string
  }[]
  createdAt: Date
  updatedAt: Date
}

// Sample schema for MongoDB
export const CourseSchema = {
  courseCode: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  department: { type: String, required: true },
  credits: { type: Number, required: true },
  semester: { type: Number, required: true },
  year: { type: Number, required: true },
  teachers: [{ type: String }],
  students: [{ type: String }],
  syllabus: {
    units: [
      {
        title: { type: String },
        topics: [{ type: String }],
        completed: { type: Boolean, default: false },
      },
    ],
  },
  schedule: [
    {
      day: { type: String },
      startTime: { type: String },
      endTime: { type: String },
      room: { type: String },
      section: { type: String },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}
