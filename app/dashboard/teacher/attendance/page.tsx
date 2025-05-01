"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, CheckCircle2, XCircle, Filter } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function TeacherAttendance() {
  const { toast } = useToast()
  const [selectedClass, setSelectedClass] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  // Sample data for classes
  const classes = [
    {
      id: "1",
      subject: "Data Structures & Algorithms",
      batch: "CSE 3rd Year - Section A",
      time: "09:00 - 10:30",
      room: "Room 301",
      date: "2025-05-01",
      totalStudents: 45,
      presentStudents: 42,
    },
    {
      id: "2",
      subject: "Database Management Systems",
      batch: "CSE 3rd Year - Section B",
      time: "11:00 - 12:30",
      room: "Lab 102",
      date: "2025-05-01",
      totalStudents: 40,
      presentStudents: 38,
    },
    {
      id: "3",
      subject: "Advanced Programming",
      batch: "CSE 4th Year - Section A",
      time: "14:00 - 15:30",
      room: "Lab 103",
      date: "2025-05-01",
      totalStudents: 50,
      presentStudents: 0,
    },
    {
      id: "4",
      subject: "Data Structures & Algorithms",
      batch: "CSE 3rd Year - Section B",
      time: "16:00 - 17:30",
      room: "Room 302",
      date: "2025-05-01",
      totalStudents: 45,
      presentStudents: 0,
    },
  ]

  // Sample data for students
  const students = [
    { id: "1", name: "Aditya Sharma", rollNo: "GCE/2021/001", present: true },
    { id: "2", name: "Priya Patel", rollNo: "GCE/2021/002", present: true },
    { id: "3", name: "Rahul Singh", rollNo: "GCE/2021/003", present: true },
    { id: "4", name: "Neha Gupta", rollNo: "GCE/2021/004", present: false },
    { id: "5", name: "Vikram Verma", rollNo: "GCE/2021/005", present: true },
    { id: "6", name: "Ananya Reddy", rollNo: "GCE/2021/006", present: true },
    { id: "7", name: "Rajesh Kumar", rollNo: "GCE/2021/007", present: true },
    { id: "8", name: "Sneha Joshi", rollNo: "GCE/2021/008", present: true },
    { id: "9", name: "Karan Malhotra", rollNo: "GCE/2021/009", present: true },
    { id: "10", name: "Divya Sharma", rollNo: "GCE/2021/010", present: true },
  ]

  // Filter students based on search query
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Handle marking attendance
  const [attendanceData, setAttendanceData] = useState(students)

  const handleAttendanceChange = (studentId: string, isPresent: boolean) => {
    setAttendanceData((prev) =>
      prev.map((student) => (student.id === studentId ? { ...student, present: isPresent } : student)),
    )
  }

  const handleSubmitAttendance = () => {
    // In a real app, this would send the data to the server
    toast({
      title: "Attendance Submitted",
      description: `Marked attendance for ${attendanceData.filter((s) => s.present).length} out of ${attendanceData.length} students.`,
    })
  }

  // Handle mark all present/absent
  const markAllPresent = () => {
    setAttendanceData((prev) => prev.map((student) => ({ ...student, present: true })))
  }

  const markAllAbsent = () => {
    setAttendanceData((prev) => prev.map((student) => ({ ...student, present: false })))
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Attendance Management</h2>
      </div>

      <Tabs defaultValue="mark" className="space-y-4">
        <TabsList>
          <TabsTrigger value="mark">Mark Attendance</TabsTrigger>
          <TabsTrigger value="history">Attendance History</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="mark" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mark Attendance</CardTitle>
              <CardDescription>Select a class and date to mark attendance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="class">Select Class</Label>
                    <Select value={selectedClass} onValueChange={setSelectedClass}>
                      <SelectTrigger id="class">
                        <SelectValue placeholder="Select a class" />
                      </SelectTrigger>
                      <SelectContent>
                        {classes.map((cls) => (
                          <SelectItem key={cls.id} value={cls.id}>
                            {cls.subject} - {cls.batch}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>
                </div>

                {selectedClass && selectedDate && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="font-medium">{classes.find((c) => c.id === selectedClass)?.subject}</h3>
                        <p className="text-sm text-muted-foreground">
                          {classes.find((c) => c.id === selectedClass)?.batch} •
                          {classes.find((c) => c.id === selectedClass)?.time} •
                          {classes.find((c) => c.id === selectedClass)?.room}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={markAllPresent}>
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Mark All Present
                        </Button>
                        <Button variant="outline" size="sm" onClick={markAllAbsent}>
                          <XCircle className="h-4 w-4 mr-2" />
                          Mark All Absent
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Search className="h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search students by name or roll number..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1"
                      />
                    </div>

                    <div className="border rounded-md">
                      <div className="grid grid-cols-12 gap-4 p-4 border-b bg-muted/50 font-medium">
                        <div className="col-span-1">No.</div>
                        <div className="col-span-3">Roll No.</div>
                        <div className="col-span-6">Name</div>
                        <div className="col-span-2 text-center">Attendance</div>
                      </div>

                      <div className="divide-y">
                        {filteredStudents.map((student, index) => (
                          <div key={student.id} className="grid grid-cols-12 gap-4 p-4 items-center">
                            <div className="col-span-1 text-muted-foreground">{index + 1}</div>
                            <div className="col-span-3">{student.rollNo}</div>
                            <div className="col-span-6">{student.name}</div>
                            <div className="col-span-2 flex justify-center">
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                  <Checkbox
                                    id={`present-${student.id}`}
                                    checked={attendanceData.find((s) => s.id === student.id)?.present}
                                    onCheckedChange={(checked) =>
                                      handleAttendanceChange(student.id, checked as boolean)
                                    }
                                  />
                                  <Label htmlFor={`present-${student.id}`}>Present</Label>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button onClick={handleSubmitAttendance}>Submit Attendance</Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Attendance History</CardTitle>
              <CardDescription>View and edit past attendance records</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="filter-class">Filter by Class</Label>
                    <Select>
                      <SelectTrigger id="filter-class">
                        <SelectValue placeholder="All Classes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Classes</SelectItem>
                        {classes.map((cls) => (
                          <SelectItem key={cls.id} value={cls.id}>
                            {cls.subject} - {cls.batch}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex-1 space-y-2">
                    <Label htmlFor="filter-date">Filter by Date</Label>
                    <Input id="filter-date" type="date" />
                  </div>

                  <div className="flex-1 space-y-2">
                    <Label htmlFor="filter-batch">Filter by Batch</Label>
                    <Select>
                      <SelectTrigger id="filter-batch">
                        <SelectValue placeholder="All Batches" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Batches</SelectItem>
                        <SelectItem value="cse3a">CSE 3rd Year - Section A</SelectItem>
                        <SelectItem value="cse3b">CSE 3rd Year - Section B</SelectItem>
                        <SelectItem value="cse4a">CSE 4th Year - Section A</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-end">
                    <Button variant="outline" className="w-full">
                      <Filter className="h-4 w-4 mr-2" />
                      Apply Filters
                    </Button>
                  </div>
                </div>

                <div className="border rounded-md">
                  <div className="grid grid-cols-12 gap-4 p-4 border-b bg-muted/50 font-medium">
                    <div className="col-span-3">Date</div>
                    <div className="col-span-3">Subject</div>
                    <div className="col-span-2">Batch</div>
                    <div className="col-span-2">Attendance</div>
                    <div className="col-span-2 text-right">Actions</div>
                  </div>

                  <div className="divide-y">
                    {classes
                      .filter((c) => c.presentStudents > 0)
                      .map((cls) => (
                        <div key={cls.id} className="grid grid-cols-12 gap-4 p-4 items-center">
                          <div className="col-span-3 flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>
                              {new Date(cls.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                          <div className="col-span-3">{cls.subject}</div>
                          <div className="col-span-2">{cls.batch.split(" - ")[1]}</div>
                          <div className="col-span-2">
                            {cls.presentStudents}/{cls.totalStudents}
                            <span className="text-muted-foreground ml-1">
                              ({Math.round((cls.presentStudents / cls.totalStudents) * 100)}%)
                            </span>
                          </div>
                          <div className="col-span-2 flex justify-end gap-2">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Reports</CardTitle>
              <CardDescription>Generate and view attendance reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Class-wise Report</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Generate attendance reports for specific classes
                      </p>
                      <Button className="w-full">Generate Report</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Student-wise Report</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Generate attendance reports for individual students
                      </p>
                      <Button className="w-full">Generate Report</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Date Range Report</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">Generate reports for a specific date range</p>
                      <Button className="w-full">Generate Report</Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Recent Reports</h3>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-12 gap-4 p-4 border-b bg-muted/50 font-medium">
                      <div className="col-span-3">Report Name</div>
                      <div className="col-span-3">Generated On</div>
                      <div className="col-span-4">Description</div>
                      <div className="col-span-2 text-right">Actions</div>
                    </div>

                    <div className="divide-y">
                      {[
                        {
                          id: "1",
                          name: "CSE 3rd Year - Section A (April 2025)",
                          date: "2025-04-30",
                          description: "Monthly attendance report for CSE 3rd Year Section A",
                        },
                        {
                          id: "2",
                          name: "Database Management Systems (March-April 2025)",
                          date: "2025-04-15",
                          description: "Bi-monthly attendance report for DBMS course",
                        },
                        {
                          id: "3",
                          name: "Low Attendance Students Report",
                          date: "2025-04-01",
                          description: "Report of students with attendance below 75%",
                        },
                      ].map((report) => (
                        <div key={report.id} className="grid grid-cols-12 gap-4 p-4 items-center">
                          <div className="col-span-3">{report.name}</div>
                          <div className="col-span-3">
                            {new Date(report.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </div>
                          <div className="col-span-4 text-sm text-muted-foreground">{report.description}</div>
                          <div className="col-span-2 flex justify-end gap-2">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              Download
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
