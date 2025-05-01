import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Users, School } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <School className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Galgotia College</h1>
        </div>
        <div className="flex gap-4">
          <Link href="/login">
            <Button variant="secondary">Login</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 px-6 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Galgotia College Management System</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A comprehensive platform for students, teachers, and administrators to manage academic activities and
              college operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/login?role=student">
                <Button size="lg" className="gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Student Login
                </Button>
              </Link>
              <Link href="/login?role=teacher">
                <Button size="lg" variant="outline" className="gap-2">
                  <BookOpen className="h-5 w-5" />
                  Teacher Login
                </Button>
              </Link>
              <Link href="/login?role=director">
                <Button size="lg" variant="outline" className="gap-2">
                  <Users className="h-5 w-5" />
                  Director Login
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">For Students</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Course registration</li>
                  <li>• View timetable and attendance</li>
                  <li>• Track academic progress</li>
                  <li>• Submit assignments</li>
                  <li>• Access grades and results</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">For Teachers</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Manage class timetables</li>
                  <li>• Track student attendance</li>
                  <li>• Create and grade assignments</li>
                  <li>• Monitor course completion</li>
                  <li>• Communicate with students</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">For Directors</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• College administration</li>
                  <li>• Department management</li>
                  <li>• Faculty oversight</li>
                  <li>• Academic planning</li>
                  <li>• Performance analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-6 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Galgotia College. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
