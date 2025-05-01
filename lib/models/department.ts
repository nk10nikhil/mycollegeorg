// This file defines the Department model for MongoDB

export interface Department {
  _id?: string
  name: string
  code: string
  headId: string // ID of the department head (teacher)
  faculty: string[] // Array of teacher IDs
  courses: string[] // Array of course IDs
  students: string[] // Array of student IDs
  budget: number
  labs: {
    name: string
    location: string
    capacity: number
    equipment: string[]
  }[]
  createdAt: Date
  updatedAt: Date
}

// Sample schema for MongoDB
export const DepartmentSchema = {
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  headId: { type: String, required: true },
  faculty: [{ type: String }],
  courses: [{ type: String }],
  students: [{ type: String }],
  budget: { type: Number, required: true },
  labs: [
    {
      name: { type: String, required: true },
      location: { type: String, required: true },
      capacity: { type: Number, required: true },
      equipment: [{ type: String }],
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}
