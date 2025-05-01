import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, GraduationCap, Users, FileText, Building2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export default function DirectorDashboard() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Director Dashboard</h2>
        <div className="flex items-center space-x-2">
          <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            College Administration
          </div>
          <div className="bg-muted px-3 py-1 rounded-full text-sm font-medium">Director ID: GCD/2018/001</div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="approvals">Pending Approvals</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4,287</div>
                <p className="text-xs text-muted-foreground">+156 from last semester</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Faculty Members</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">187</div>
                <p className="text-xs text-muted-foreground">Across 8 departments</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">142</div>
                <p className="text-xs text-muted-foreground">Current semester</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">Requires your attention</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Department Performance</CardTitle>
                <CardDescription>Academic metrics by department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      department: "Computer Science & Engineering",
                      students: 1245,
                      faculty: 42,
                      avgAttendance: 87,
                      avgGPA: 8.4,
                      placementRate: 92,
                    },
                    {
                      department: "Electronics & Communication",
                      students: 980,
                      faculty: 38,
                      avgAttendance: 85,
                      avgGPA: 8.2,
                      placementRate: 88,
                    },
                    {
                      department: "Mechanical Engineering",
                      students: 820,
                      faculty: 35,
                      avgAttendance: 82,
                      avgGPA: 7.9,
                      placementRate: 85,
                    },
                    {
                      department: "Civil Engineering",
                      students: 650,
                      faculty: 30,
                      avgAttendance: 80,
                      avgGPA: 7.8,
                      placementRate: 82,
                    },
                    {
                      department: "Electrical Engineering",
                      students: 592,
                      faculty: 32,
                      avgAttendance: 83,
                      avgGPA: 8.0,
                      placementRate: 84,
                    },
                  ].map((dept, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{dept.department}</h3>
                        <div className="flex items-center gap-4">
                          <span className="text-sm">{dept.students} students</span>
                          <span className="text-sm">{dept.faculty} faculty</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-2">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Attendance</span>
                            <span>{dept.avgAttendance}%</span>
                          </div>
                          <Progress value={dept.avgAttendance} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Avg. GPA</span>
                            <span>{dept.avgGPA}/10</span>
                          </div>
                          <Progress value={dept.avgGPA * 10} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Placement</span>
                            <span>{dept.placementRate}%</span>
                          </div>
                          <Progress value={dept.placementRate} className="h-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Key Metrics</CardTitle>
                <CardDescription>College-wide performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-medium mb-3">Overall Attendance Rate</h3>
                    <div className="flex items-center">
                      <div className="w-full mr-4">
                        <Progress value={84} className="h-2" />
                      </div>
                      <span className="text-sm font-medium">84%</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-3">Average GPA</h3>
                    <div className="flex items-center">
                      <div className="w-full mr-4">
                        <Progress value={81} className="h-2" />
                      </div>
                      <span className="text-sm font-medium">8.1/10</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-3">Placement Rate</h3>
                    <div className="flex items-center">
                      <div className="w-full mr-4">
                        <Progress value={87} className="h-2" />
                      </div>
                      <span className="text-sm font-medium">87%</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-3">Faculty-Student Ratio</h3>
                    <div className="flex items-center">
                      <div className="w-full mr-4">
                        <Progress value={75} className="h-2" />
                      </div>
                      <span className="text-sm font-medium">1:23</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-3">Research Publications</h3>
                    <div className="flex items-center">
                      <div className="w-full mr-4">
                        <Progress value={68} className="h-2" />
                      </div>
                      <span className="text-sm font-medium">124 this year</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="departments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Department Overview</CardTitle>
              <CardDescription>Manage departments and their resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    name: "Computer Science & Engineering",
                    head: "Dr. Rajesh Kumar",
                    students: 1245,
                    faculty: 42,
                    courses: 28,
                    labs: 8,
                    budget: "₹ 2.4 Cr",
                    utilization: 87,
                  },
                  {
                    name: "Electronics & Communication",
                    head: "Dr. Priya Sharma",
                    students: 980,
                    faculty: 38,
                    courses: 24,
                    labs: 7,
                    budget: "₹ 2.1 Cr",
                    utilization: 82,
                  },
                  {
                    name: "Mechanical Engineering",
                    head: "Dr. Vikram Singh",
                    students: 820,
                    faculty: 35,
                    courses: 22,
                    labs: 6,
                    budget: "₹ 1.9 Cr",
                    utilization: 79,
                  },
                  {
                    name: "Civil Engineering",
                    head: "Dr. Ananya Gupta",
                    students: 650,
                    faculty: 30,
                    courses: 20,
                    labs: 5,
                    budget: "₹ 1.7 Cr",
                    utilization: 75,
                  },
                  {
                    name: "Electrical Engineering",
                    head: "Dr. Suresh Patel",
                    students: 592,
                    faculty: 32,
                    courses: 21,
                    labs: 6,
                    budget: "₹ 1.8 Cr",
                    utilization: 80,
                  },
                ].map((dept, index) => (
                  <div key={index} className="p-4 rounded-lg border bg-card">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <Building2 className="h-5 w-5 text-muted-foreground" />
                          <h3 className="font-medium">{dept.name}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">Head: {dept.head}</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Students</p>
                            <p className="font-medium">{dept.students}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Faculty</p>
                            <p className="font-medium">{dept.faculty}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Courses</p>
                            <p className="font-medium">{dept.courses}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Labs</p>
                            <p className="font-medium">{dept.labs}</p>
                          </div>
                        </div>

                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Budget Utilization: {dept.budget}</span>
                            <span>{dept.utilization}%</span>
                          </div>
                          <Progress value={dept.utilization} className="h-2" />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 items-start">
                        <Button size="sm">View Details</Button>
                        <Button size="sm" variant="outline">
                          Faculty
                        </Button>
                        <Button size="sm" variant="outline">
                          Courses
                        </Button>
                        <Button size="sm" variant="outline">
                          Resources
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approvals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Approvals</CardTitle>
              <CardDescription>Items requiring your approval</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <h3 className="font-medium">Faculty Requests</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Leave Application",
                      faculty: "Dr. Amit Verma",
                      department: "Computer Science & Engineering",
                      details: "Medical leave for 7 days (May 5-12, 2025)",
                      submitted: "April 28, 2025",
                      priority: "Medium",
                    },
                    {
                      title: "Conference Attendance Request",
                      faculty: "Dr. Neha Singh",
                      department: "Electronics & Communication",
                      details: "International Conference on Advanced Electronics (May 15-18, 2025)",
                      submitted: "April 25, 2025",
                      priority: "Low",
                    },
                    {
                      title: "Research Fund Request",
                      faculty: "Dr. Rajesh Kumar",
                      department: "Computer Science & Engineering",
                      details: "₹ 3.5 Lakhs for AI Research Project",
                      submitted: "April 30, 2025",
                      priority: "High",
                    },
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-lg border bg-card">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm mt-1">
                            {item.faculty} • {item.department}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">{item.details}</p>
                          <p className="text-xs text-muted-foreground mt-2">Submitted: {item.submitted}</p>
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
                            {item.priority}
                          </span>
                          <Button size="sm" variant="outline">
                            Reject
                          </Button>
                          <Button size="sm">Approve</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="font-medium mt-6">Academic Approvals</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "New Course Proposal",
                      department: "Computer Science & Engineering",
                      details: "Introduction to Artificial Intelligence and Machine Learning",
                      submitted: "April 20, 2025",
                      submittedBy: "Dr. Rajesh Kumar",
                      priority: "Medium",
                    },
                    {
                      title: "Curriculum Update",
                      department: "Electronics & Communication",
                      details: "Revision of 3rd Year B.Tech ECE curriculum",
                      submitted: "April 22, 2025",
                      submittedBy: "Dr. Priya Sharma",
                      priority: "High",
                    },
                    {
                      title: "Special Workshop Request",
                      department: "Mechanical Engineering",
                      details: "Industry workshop on Advanced Manufacturing Techniques",
                      submitted: "April 27, 2025",
                      submittedBy: "Dr. Vikram Singh",
                      priority: "Medium",
                    },
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-lg border bg-card">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm mt-1">
                            {item.department} • Submitted by: {item.submittedBy}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">{item.details}</p>
                          <p className="text-xs text-muted-foreground mt-2">Submitted: {item.submitted}</p>
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
                            {item.priority}
                          </span>
                          <Button size="sm" variant="outline">
                            Review
                          </Button>
                          <Button size="sm" variant="outline">
                            Reject
                          </Button>
                          <Button size="sm">Approve</Button>
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
