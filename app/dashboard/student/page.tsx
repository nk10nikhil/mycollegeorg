import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock, BookOpen, FileText, AlertCircle, CheckCircle2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function StudentDashboard() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Student Dashboard</h2>
        <div className="flex items-center space-x-2">
          <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            B.Tech CSE - 3rd Year
          </div>
          <div className="bg-muted px-3 py-1 rounded-full text-sm font-medium">Roll No: GCE/2021/123</div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Attendance</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87.5%</div>
                <p className="text-xs text-muted-foreground">7 out of 8 classes this week</p>
                <Progress value={87.5} className="mt-3 h-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Assignments</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Pending submissions</p>
                <Progress value={40} className="mt-3 h-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Courses</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">6</div>
                <p className="text-xs text-muted-foreground">Current semester</p>
                <Progress value={75} className="mt-3 h-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">CGPA</CardTitle>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8.7</div>
                <p className="text-xs text-muted-foreground">Last semester: 8.5</p>
                <Progress value={87} className="mt-3 h-2" />
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
                      room: "Room 301",
                      teacher: "Dr. Sharma",
                      status: "Completed",
                    },
                    {
                      time: "11:00 - 12:30",
                      subject: "Database Management Systems",
                      room: "Lab 102",
                      teacher: "Prof. Gupta",
                      status: "Ongoing",
                    },
                    {
                      time: "14:00 - 15:30",
                      subject: "Computer Networks",
                      room: "Room 205",
                      teacher: "Dr. Verma",
                      status: "Upcoming",
                    },
                    {
                      time: "16:00 - 17:30",
                      subject: "Software Engineering",
                      room: "Room 401",
                      teacher: "Prof. Singh",
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
                          {item.room} • {item.teacher}
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
                <CardTitle>Upcoming Deadlines</CardTitle>
                <CardDescription>Assignments and submissions due soon</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Database Project Submission",
                      course: "Database Management Systems",
                      due: "May 5, 2025",
                      daysLeft: 4,
                    },
                    {
                      title: "Networks Lab Report",
                      course: "Computer Networks",
                      due: "May 7, 2025",
                      daysLeft: 6,
                    },
                    {
                      title: "Algorithm Analysis Assignment",
                      course: "Data Structures & Algorithms",
                      due: "May 10, 2025",
                      daysLeft: 9,
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-3 rounded-lg bg-card">
                      <div className="flex-shrink-0 mr-4">
                        <div className="flex flex-col items-center">
                          <CalendarDays className="h-5 w-5 text-muted-foreground" />
                          <span className="text-xs font-medium mt-1">{item.daysLeft} days</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.course} • Due: {item.due}
                        </p>
                      </div>
                      <div
                        className={`ml-2 w-2 h-2 rounded-full ${
                          item.daysLeft <= 3 ? "bg-destructive" : item.daysLeft <= 7 ? "bg-amber-500" : "bg-primary"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Classes, exams, and college events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    date: "May 5, 2025",
                    events: [
                      {
                        time: "10:00 AM",
                        title: "Mid-semester Exam: Computer Networks",
                        location: "Examination Hall 2",
                      },
                      {
                        time: "2:00 PM",
                        title: "Project Presentation: Software Engineering",
                        location: "Conference Room 1",
                      },
                    ],
                  },
                  {
                    date: "May 7, 2025",
                    events: [
                      {
                        time: "11:00 AM",
                        title: "Guest Lecture: AI and Machine Learning",
                        location: "Auditorium",
                      },
                    ],
                  },
                  {
                    date: "May 10, 2025",
                    events: [
                      {
                        time: "9:00 AM",
                        title: "Mid-semester Exam: Database Management",
                        location: "Examination Hall 1",
                      },
                      {
                        time: "3:00 PM",
                        title: "Technical Club Meeting",
                        location: "Club Room 3",
                      },
                    ],
                  },
                ].map((day, dayIndex) => (
                  <div key={dayIndex} className="space-y-2">
                    <h3 className="font-medium">{day.date}</h3>
                    <div className="space-y-2">
                      {day.events.map((event, eventIndex) => (
                        <div key={eventIndex} className="flex items-start p-3 rounded-lg bg-card">
                          <div className="flex-shrink-0 mr-4">
                            <div className="text-xs font-medium">{event.time}</div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">{event.title}</p>
                            <p className="text-xs text-muted-foreground">{event.location}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="announcements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Announcements</CardTitle>
              <CardDescription>Important notices from the college</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Registration for Summer Internship Program",
                    date: "April 30, 2025",
                    content:
                      "All B.Tech 3rd year students are invited to register for the Summer Internship Program. The registration deadline is May 15, 2025.",
                    department: "Training & Placement Cell",
                  },
                  {
                    title: "Revised Examination Schedule",
                    date: "April 28, 2025",
                    content:
                      "Please note that the mid-semester examination schedule has been revised. Check the updated schedule on the college portal.",
                    department: "Examination Department",
                  },
                  {
                    title: "Annual Technical Fest - TechnoGalaxia 2025",
                    date: "April 25, 2025",
                    content:
                      "The annual technical fest will be held from May 20-22, 2025. Registration for various events is now open.",
                    department: "Student Council",
                  },
                ].map((announcement, index) => (
                  <div key={index} className="p-4 rounded-lg border bg-card">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{announcement.title}</h3>
                      <span className="text-xs text-muted-foreground">{announcement.date}</span>
                    </div>
                    <p className="text-sm mb-2">{announcement.content}</p>
                    <div className="text-xs text-muted-foreground">From: {announcement.department}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
