import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, MapPin } from "lucide-react"

export default function StudentTimetable() {
  // Days of the week
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  // Time slots
  const timeSlots = ["09:00 - 10:30", "10:45 - 12:15", "12:30 - 14:00", "14:15 - 15:45", "16:00 - 17:30"]

  // Sample timetable data
  const timetableData = {
    Monday: [
      {
        time: "09:00 - 10:30",
        subject: "Data Structures & Algorithms",
        teacher: "Dr. Sharma",
        room: "Room 301",
        type: "Lecture",
      },
      {
        time: "10:45 - 12:15",
        subject: "Computer Networks",
        teacher: "Dr. Verma",
        room: "Room 205",
        type: "Lecture",
      },
      {
        time: "14:15 - 15:45",
        subject: "Software Engineering",
        teacher: "Prof. Singh",
        room: "Room 401",
        type: "Lecture",
      },
    ],
    Tuesday: [
      {
        time: "09:00 - 10:30",
        subject: "Database Management Systems",
        teacher: "Prof. Gupta",
        room: "Room 302",
        type: "Lecture",
      },
      {
        time: "12:30 - 14:00",
        subject: "Operating Systems",
        teacher: "Dr. Patel",
        room: "Room 201",
        type: "Lecture",
      },
      {
        time: "14:15 - 17:30",
        subject: "Database Management Systems",
        teacher: "Prof. Gupta",
        room: "Lab 102",
        type: "Lab",
      },
    ],
    Wednesday: [
      {
        time: "09:00 - 10:30",
        subject: "Data Structures & Algorithms",
        teacher: "Dr. Sharma",
        room: "Room 301",
        type: "Lecture",
      },
      {
        time: "10:45 - 12:15",
        subject: "Computer Networks",
        teacher: "Dr. Verma",
        room: "Room 205",
        type: "Lecture",
      },
      {
        time: "14:15 - 17:30",
        subject: "Computer Networks",
        teacher: "Dr. Verma",
        room: "Lab 103",
        type: "Lab",
      },
    ],
    Thursday: [
      {
        time: "09:00 - 10:30",
        subject: "Database Management Systems",
        teacher: "Prof. Gupta",
        room: "Room 302",
        type: "Lecture",
      },
      {
        time: "12:30 - 14:00",
        subject: "Operating Systems",
        teacher: "Dr. Patel",
        room: "Room 201",
        type: "Lecture",
      },
      {
        time: "14:15 - 17:30",
        subject: "Data Structures & Algorithms",
        teacher: "Dr. Sharma",
        room: "Lab 101",
        type: "Lab",
      },
    ],
    Friday: [
      {
        time: "09:00 - 10:30",
        subject: "Software Engineering",
        teacher: "Prof. Singh",
        room: "Room 401",
        type: "Lecture",
      },
      {
        time: "10:45 - 12:15",
        subject: "Operating Systems",
        teacher: "Dr. Patel",
        room: "Room 201",
        type: "Lecture",
      },
      {
        time: "14:15 - 17:30",
        subject: "Operating Systems",
        teacher: "Dr. Patel",
        room: "Lab 104",
        type: "Lab",
      },
    ],
    Saturday: [
      {
        time: "09:00 - 12:15",
        subject: "Software Engineering",
        teacher: "Prof. Singh",
        room: "Lab 105",
        type: "Lab",
      },
    ],
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Timetable</h2>
        <div className="flex items-center space-x-2">
          <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            B.Tech CSE - 3rd Year
          </div>
          <div className="bg-muted px-3 py-1 rounded-full text-sm font-medium">Section A</div>
        </div>
      </div>

      <Tabs defaultValue="weekly" className="space-y-4">
        <TabsList>
          <TabsTrigger value="weekly">Weekly View</TabsTrigger>
          <TabsTrigger value="daily">Daily View</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Schedule</CardTitle>
              <CardDescription>Your class schedule for the current semester</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2 bg-muted/50 text-left">Time</th>
                      {days.map((day) => (
                        <th key={day} className="border p-2 bg-muted/50 text-left">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {timeSlots.map((timeSlot) => (
                      <tr key={timeSlot}>
                        <td className="border p-2 bg-muted/20 font-medium text-sm">{timeSlot}</td>
                        {days.map((day) => {
                          const classForThisSlot = timetableData[day]?.find(
                            (item) =>
                              item.time === timeSlot ||
                              (item.time.includes(" - ") && timeSlot.includes(item.time.split(" - ")[0])),
                          )

                          return (
                            <td key={`${day}-${timeSlot}`} className="border p-2">
                              {classForThisSlot ? (
                                <div
                                  className={`p-2 rounded-md ${
                                    classForThisSlot.type === "Lab"
                                      ? "bg-primary/10 border border-primary/20"
                                      : "bg-muted/30"
                                  }`}
                                >
                                  <p className="font-medium text-sm">{classForThisSlot.subject}</p>
                                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                                    <MapPin className="h-3 w-3 mr-1" />
                                    {classForThisSlot.room}
                                  </div>
                                  <p className="text-xs text-muted-foreground mt-1">{classForThisSlot.teacher}</p>
                                  <span className="text-xs px-1.5 py-0.5 bg-muted/50 rounded-sm mt-1 inline-block">
                                    {classForThisSlot.type}
                                  </span>
                                </div>
                              ) : null}
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="daily" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Daily Schedule</CardTitle>
              <CardDescription>Your classes for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {timetableData["Monday"].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-4 rounded-lg ${
                      item.type === "Lab" ? "bg-primary/10 border border-primary/20" : "bg-card border"
                    }`}
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex flex-col items-center">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <span className="text-xs font-medium mt-1">{item.time.split(" - ")[0]}</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{item.subject}</p>
                      <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {item.room}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{item.teacher}</p>
                    </div>
                    <div className="ml-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-muted/50 text-muted-foreground">
                        {item.type}
                      </span>
                    </div>
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
