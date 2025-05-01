"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CalendarDays, FileText, Upload, Download, Eye, Clock, CheckCircle2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function StudentAssignments() {
  const { toast } = useToast()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  // Sample data for assignments
  const assignments = [
    {
      id: "1",
      title: "Database Project Submission",
      course: "Database Management Systems",
      dueDate: "2025-05-05",
      description:
        "Design and implement a database for a college management system. Submit the ER diagram, schema design, and SQL queries.",
      status: "pending",
      totalMarks: 20,
      attachments: ["Project_Guidelines.pdf", "Sample_ER_Diagram.png"],
    },
    {
      id: "2",
      title: "Networks Lab Report",
      course: "Computer Networks",
      dueDate: "2025-05-07",
      description: "Submit a detailed report of the networking lab experiments conducted during the last two weeks.",
      status: "pending",
      totalMarks: 15,
      attachments: ["Lab_Report_Template.docx"],
    },
    {
      id: "3",
      title: "Algorithm Analysis Assignment",
      course: "Data Structures & Algorithms",
      dueDate: "2025-05-10",
      description:
        "Analyze the time and space complexity of the given algorithms and implement them in a programming language of your choice.",
      status: "pending",
      totalMarks: 25,
      attachments: ["Algorithm_Problems.pdf"],
    },
    {
      id: "4",
      title: "Software Engineering Case Study",
      course: "Software Engineering",
      dueDate: "2025-04-25",
      description:
        "Analyze the given case study and provide a detailed report on the software development methodology, challenges, and solutions.",
      status: "submitted",
      submittedOn: "2025-04-24",
      totalMarks: 30,
      obtainedMarks: null,
      feedback: null,
      attachments: ["Case_Study.pdf"],
      submittedFiles: ["SE_Case_Study_Analysis.pdf"],
    },
    {
      id: "5",
      title: "Operating Systems Quiz",
      course: "Operating Systems",
      dueDate: "2025-04-20",
      description: "Online quiz on process management, memory management, and file systems.",
      status: "graded",
      submittedOn: "2025-04-20",
      totalMarks: 15,
      obtainedMarks: 13,
      feedback: "Good understanding of concepts. Could improve on virtual memory concepts.",
      attachments: [],
      submittedFiles: [],
    },
  ]

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0])
    }
  }

  // Handle assignment submission
  const handleSubmitAssignment = (assignmentId: string) => {
    if (!selectedFile) {
      toast({
        title: "Error",
        description: "Please select a file to upload",
        variant: "destructive",
      })
      return
    }

    // In a real app, this would upload the file to the server
    toast({
      title: "Assignment Submitted",
      description: `Successfully submitted ${selectedFile.name} for the assignment.`,
    })

    setSelectedFile(null)
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Assignments</h2>
      </div>

      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="submitted">Submitted</TabsTrigger>
          <TabsTrigger value="graded">Graded</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {assignments
            .filter((a) => a.status === "pending")
            .map((assignment) => (
              <Card key={assignment.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{assignment.title}</CardTitle>
                      <CardDescription>{assignment.course}</CardDescription>
                    </div>
                    <div className="flex items-center">
                      <CalendarDays className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm">
                        Due:{" "}
                        {new Date(assignment.dueDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      {new Date(assignment.dueDate) < new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) && (
                        <Badge variant="destructive" className="ml-2">
                          Due Soon
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium mb-1">Description</h3>
                      <p className="text-sm text-muted-foreground">{assignment.description}</p>
                    </div>

                    {assignment.attachments.length > 0 && (
                      <div>
                        <h3 className="text-sm font-medium mb-2">Attachments</h3>
                        <div className="flex flex-wrap gap-2">
                          {assignment.attachments.map((attachment, index) => (
                            <Button key={index} variant="outline" size="sm" className="gap-1">
                              <FileText className="h-4 w-4" />
                              {attachment}
                              <Download className="h-4 w-4 ml-1" />
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="border-t pt-4">
                      <h3 className="text-sm font-medium mb-2">Submit Your Work</h3>
                      <div className="grid gap-4">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                          <Label htmlFor={`file-${assignment.id}`}>Upload File</Label>
                          <Input id={`file-${assignment.id}`} type="file" onChange={handleFileChange} />
                        </div>

                        <div className="grid w-full gap-1.5">
                          <Label htmlFor={`comments-${assignment.id}`}>Comments (Optional)</Label>
                          <Textarea
                            id={`comments-${assignment.id}`}
                            placeholder="Add any comments about your submission"
                            rows={3}
                          />
                        </div>

                        <div className="flex justify-end">
                          <Button onClick={() => handleSubmitAssignment(assignment.id)} className="gap-2">
                            <Upload className="h-4 w-4" />
                            Submit Assignment
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="submitted" className="space-y-4">
          {assignments
            .filter((a) => a.status === "submitted")
            .map((assignment) => (
              <Card key={assignment.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{assignment.title}</CardTitle>
                      <CardDescription>{assignment.course}</CardDescription>
                    </div>
                    <Badge className="bg-amber-500">Submitted</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <CalendarDays className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-sm">
                            Due:{" "}
                            {new Date(assignment.dueDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-sm">
                            Submitted:{" "}
                            {new Date(assignment.submittedOn!).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-medium">Marks: Pending / {assignment.totalMarks}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-1">Description</h3>
                      <p className="text-sm text-muted-foreground">{assignment.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {assignment.attachments.length > 0 && (
                        <div>
                          <h3 className="text-sm font-medium mb-2">Assignment Files</h3>
                          <div className="flex flex-wrap gap-2">
                            {assignment.attachments.map((attachment, index) => (
                              <Button key={index} variant="outline" size="sm" className="gap-1">
                                <FileText className="h-4 w-4" />
                                {attachment}
                                <Download className="h-4 w-4 ml-1" />
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}

                      {assignment.submittedFiles && assignment.submittedFiles.length > 0 && (
                        <div>
                          <h3 className="text-sm font-medium mb-2">Your Submission</h3>
                          <div className="flex flex-wrap gap-2">
                            {assignment.submittedFiles.map((file, index) => (
                              <Button key={index} variant="outline" size="sm" className="gap-1">
                                <FileText className="h-4 w-4" />
                                {file}
                                <Eye className="h-4 w-4 ml-1" />
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="graded" className="space-y-4">
          {assignments
            .filter((a) => a.status === "graded")
            .map((assignment) => (
              <Card key={assignment.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{assignment.title}</CardTitle>
                      <CardDescription>{assignment.course}</CardDescription>
                    </div>
                    <Badge className="bg-primary">Graded</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <CalendarDays className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-sm">
                            Due:{" "}
                            {new Date(assignment.dueDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-sm">
                            Submitted:{" "}
                            {new Date(assignment.submittedOn!).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-medium">
                          Marks: {assignment.obtainedMarks} / {assignment.totalMarks}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-1">Performance</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Score</span>
                          <span>{Math.round((assignment.obtainedMarks! / assignment.totalMarks) * 100)}%</span>
                        </div>
                        <Progress value={(assignment.obtainedMarks! / assignment.totalMarks) * 100} className="h-2" />
                      </div>
                    </div>

                    {assignment.feedback && (
                      <div className="bg-muted/50 p-4 rounded-md">
                        <h3 className="text-sm font-medium mb-2 flex items-center">
                          <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                          Feedback from Teacher
                        </h3>
                        <p className="text-sm">{assignment.feedback}</p>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-4">
                      {assignment.attachments.length > 0 && (
                        <div>
                          <h3 className="text-sm font-medium mb-2">Assignment Files</h3>
                          <div className="flex flex-wrap gap-2">
                            {assignment.attachments.map((attachment, index) => (
                              <Button key={index} variant="outline" size="sm" className="gap-1">
                                <FileText className="h-4 w-4" />
                                {attachment}
                                <Download className="h-4 w-4 ml-1" />
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}

                      {assignment.submittedFiles && assignment.submittedFiles.length > 0 && (
                        <div>
                          <h3 className="text-sm font-medium mb-2">Your Submission</h3>
                          <div className="flex flex-wrap gap-2">
                            {assignment.submittedFiles.map((file, index) => (
                              <Button key={index} variant="outline" size="sm" className="gap-1">
                                <FileText className="h-4 w-4" />
                                {file}
                                <Eye className="h-4 w-4 ml-1" />
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
