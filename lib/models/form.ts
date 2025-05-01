// This file defines the Form model for MongoDB

export interface Form {
  _id?: string
  title: string
  description: string
  createdBy: string // ID of the user who created the form
  creatorRole: "teacher" | "director" | "admin"
  targetAudience: "students" | "teachers" | "all"
  department?: string
  batch?: string
  program?: string
  year?: number
  startDate: Date
  endDate: Date
  fields: {
    id: string
    label: string
    type: "text" | "number" | "select" | "checkbox" | "radio" | "file" | "date"
    required: boolean
    options?: string[] // For select, checkbox, radio
    placeholder?: string
  }[]
  submissions: {
    userId: string
    submittedAt: Date
    responses: {
      fieldId: string
      value: string
    }[]
    attachments?: string[]
    status: "pending" | "approved" | "rejected"
    feedback?: string
  }[]
  status: "draft" | "published" | "closed"
  createdAt: Date
  updatedAt: Date
}

// Sample schema for MongoDB
export const FormSchema = {
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdBy: { type: String, required: true },
  creatorRole: { type: String, required: true, enum: ["teacher", "director", "admin"] },
  targetAudience: { type: String, required: true, enum: ["students", "teachers", "all"] },
  department: { type: String },
  batch: { type: String },
  program: { type: String },
  year: { type: Number },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  fields: [
    {
      id: { type: String, required: true },
      label: { type: String, required: true },
      type: { type: String, required: true, enum: ["text", "number", "select", "checkbox", "radio", "file", "date"] },
      required: { type: Boolean, default: false },
      options: [{ type: String }],
      placeholder: { type: String },
    },
  ],
  submissions: [
    {
      userId: { type: String, required: true },
      submittedAt: { type: Date, required: true },
      responses: [
        {
          fieldId: { type: String, required: true },
          value: { type: String },
        },
      ],
      attachments: [{ type: String }],
      status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
      feedback: { type: String },
    },
  ],
  status: { type: String, required: true, enum: ["draft", "published", "closed"], default: "draft" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}
