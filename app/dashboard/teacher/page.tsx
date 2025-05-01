import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Users, FileText, CheckCircle2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export default function TeacherDashboard() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h2>
        <div className="flex items-center space-x-2">
          <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            Computer Science Department
          </div>
          <div className="bg-muted px-3 py-1 rounded-full text-sm font-medium">Faculty ID: GCF/2020/045</div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="classes">Today's Classes</TabsTrigger>
          <TabsTrigger value="tasks">Pending Tasks</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Classes Today</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">8 hours of teaching</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Students</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">187</div>
                <p className="text-xs text-muted-foreground">Across 5 courses</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Assignments</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
                <p className="text-xs text-muted-foreground">To be graded</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Course Completion</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">68%</div>
                <p className="text-xs text-muted-foreground">Average across courses</p>
                <Progress value={68} className="mt-3 h-2" />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
                <CardDescription>Your classes for today, May 1, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      time: "09:00 - 10:30",
                      subject: "Data Structures & Algorithms",
                      batch: "CSE 3rd Year - Section A",
                      room: "Room 301",
                      status: "Completed",
                    },
                    {
                      time: "11:00 - 12:30",
                      subject: "Database Management Systems",
                      batch: "CSE 3rd Year - Section B",
                      room: "Lab 102",
                      status: "Ongoing",
                    },
                    {
                      time: "14:00 - 15:30",
                      subject: "Advanced Programming",
                      batch: "CSE 4th Year - Section A",
                      room: "Lab 103",
                      status: "Upcoming",
                    },
                    {
                      time: "16:00 - 17:30",
                      subject: "Data Structures & Algorithms",
                      batch: "CSE 3rd Year - Section B",
                      room: "Room 302",
                      status: "Upcoming",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center p-3 rounded-lg ${
                        item.status === "Ongoing"
                          ? "bg-primary/10 border border-primary/20"
                          : item.status === "Completed"
                            ? "bg-muted/50"
                            : "bg-card"
                      }`}
                    >
                      <div className="flex-shrink-0 mr-4">
                        <div className="flex flex-col items-center">
                          <Clock className="h-5 w-5 text-muted-foreground" />
                          <span className="text-xs font-medium mt-1">{item.time.split(" - ")[0]}</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.subject}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.batch} • {item.room}
                        </p>
                      </div>
                      <div className="ml-2">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            item.status === "Ongoing"
                              ? "bg-primary/20 text-primary"
                              : item.status === "Completed"
                                ? "bg-muted text-muted-foreground"
                                : "bg-muted/50 text-muted-foreground"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Course Progress</CardTitle>
                <CardDescription>Syllabus completion status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      course: "Data Structures & Algorithms",
                      batch: "CSE 3rd Year",
                      progress: 75,
                      topics: "15/20 topics covered",
                    },
                    {
                      course: "Database Management Systems",
                      batch: "CSE 3rd Year",
                      progress: 60,
                      topics: "12/20 topics covered",
                    },
                    {
                      course: "Advanced Programming",
                      batch: "CSE 4th Year",
                      progress: 80,
                      topics: "16/20 topics covered",
                    },
                    {
                      course: "Computer Networks",
                      batch: "CSE 3rd Year",
                      progress: 55,
                      topics: "11/20 topics covered",
                    },
                  ].map((course, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm font-medium">{course.course}</p>
                          <p className="text-xs text-muted-foreground">
                            {course.batch} • {course.topics}
                          </p>
                        </div>
                        <span className="text-sm font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="classes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Today's Classes</CardTitle>
              <CardDescription>Manage attendance and class activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    time: "09:00 - 10:30",
                    subject: "Data Structures & Algorithms",
                    batch: "CSE 3rd Year - Section A",
                    room: "Room 301",
                    status: "Completed",
                    attendance: "42/45 students",
                    attendancePercent: 93,
                  },
                  {
                    time: "11:00 - 12:30",
                    subject: "Database Management Systems",
                    batch: "CSE 3rd Year - Section B",
                    room: "Lab 102",
                    status: "Ongoing",
                    attendance: "38/40 students",
                    attendancePercent: 95,
                  },
                  {
                    time: "14:00 - 15:30",
                    subject: "Advanced Programming",
                    batch: "CSE 4th Year - Section A",
                    room: "Lab 103",
                    status: "Upcoming",
                    attendance: "0/50 students",
                    attendancePercent: 0,
                  },
                  {
                    time: "16:00 - 17:30",
                    subject: "Data Structures & Algorithms",
                    batch: "CSE 3rd Year - Section B",
                    room: "Room 302",
                    status: "Upcoming",
                    attendance: "0/45 students",
                    attendancePercent: 0,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${
                      item.status === "Ongoing" ? "bg-primary/5 border-primary/20" : "bg-card"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{item.subject}</h3>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              item.status === "Ongoing"
                                ? "bg-primary/20 text-primary"
                                : item.status === "Completed"
                                  ? "bg-muted text-muted-foreground"
                                  : "bg-muted/50 text-muted-foreground"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.time} • {item.room}
                        </p>
                        <p className="text-sm mt-1">{item.batch}</p>

                        {(item.status === "Completed" || item.status === "Ongoing") && (
                          <div className="mt-2">
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span>Attendance: {item.attendance}</span>
                              <span>{item.attendancePercent}%</span>
                            </div>
                            <Progress value={item.attendancePercent} className="h-2" />
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.status === "Upcoming" && <Button size="sm">Start Class</Button>}
                        {item.status === "Ongoing" && (
                          <>
                            <Button size="sm">Mark Attendance</Button>
                            <Button size="sm" variant="outline">
                              End Class
                            </Button>
                          </>
                        )}
                        {item.status === "Completed" && (
                          <>
                            <Button size="sm" variant="outline">
                              View Attendance
                            </Button>
                            <Button size="sm" variant="outline">
                              Class Notes
                            </Button>
                          </>
                        )}
                        <Button size="sm" variant="outline">
                          Class Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Tasks</CardTitle>
              <CardDescription>Assignments to grade and other pending tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="font-medium">Assignments to Grade</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Lab Assignment 3: SQL Queries",
                      course: "Database Management Systems",
                      batch: "CSE 3rd Year - Section B",
                      submissions: "38/40 submitted",
                      deadline: "April 28, 2025",
                      daysOverdue: 3,
                    },
                    {
                      title: "Assignment 4: Sorting Algorithms",
                      course: "Data Structures & Algorithms",
                      batch: "CSE 3rd Year - Section A",
                      submissions: "42/45 submitted",
                      deadline: "April 30, 2025",
                      daysOverdue: 1,
                    },
                    {
                      title: "Project Milestone 1: System Design",
                      course: "Advanced Programming",
                      batch: "CSE 4th Year - Section A",
                      submissions: "48/50 submitted",
                      deadline: "May 1, 2025",
                      daysOverdue: 0,
                    },
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-lg border bg-card">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.course} • {item.batch}
                          </p>
                          <div className="flex items-center gap-4 mt-2">
                            <p className="text-sm">{item.submissions}</p>
                            <p className="text-sm">
                              Deadline: {item.deadline}
                              {item.daysOverdue > 0 && (
                                <span className="text-destructive ml-1">({item.daysOverdue} days overdue)</span>
                              )}
                            </p>
                          </div>
                        </div>
                        <Button>Grade Now</Button>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="font-medium mt-6">Other Tasks</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Prepare Mid-semester Question Paper",
                      course: "Data Structures & Algorithms",
                      deadline: "May 3, 2025",
                      priority: "High",
                    },
                    {
                      title: "Update Course Materials",
                      course: "Database Management Systems",
                      deadline: "May 5, 2025",
                      priority: "Medium",
                    },
                    {
                      title: "Faculty Meeting",
                      course: "Department",
                      deadline: "May 2, 2025",
                      priority: "Medium",
                    },
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-lg border bg-card">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.course} • Deadline: {item.deadline}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              item.priority === "High"
                                ? "bg-destructive/10 text-destructive"
                                : item.priority === "Medium"
                                  ? "bg-amber-500/10 text-amber-500"
                                  : "bg-primary/10 text-primary"
                            }`}
                          >
                            {item.priority} Priority
                          </span>
                          <Button size="sm" variant="outline">
                            Complete
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
