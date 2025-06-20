"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  School,
  LayoutDashboard,
  Calendar,
  ClipboardList,
  GraduationCap,
  BookOpen,
  Users,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  UserPlus,
  ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LogoutButton } from "@/components/logout-button"

interface SidebarProps {
  role?: "student" | "teacher" | "director" | "admin"
  items?: { title: string; href: string; icon?: any }[]
  className?: string
}

export function DashboardSidebar({ role, items, className }: SidebarProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const studentLinks = [
    {
      title: "Dashboard",
      href: "/dashboard/student",
      icon: LayoutDashboard,
    },
    {
      title: "Timetable",
      href: "/dashboard/student/timetable",
      icon: Calendar,
    },
    {
      title: "Attendance",
      href: "/dashboard/student/attendance",
      icon: ClipboardList,
    },
    {
      title: "Courses",
      href: "/dashboard/student/courses",
      icon: BookOpen,
    },
    {
      title: "Assignments",
      href: "/dashboard/student/assignments",
      icon: FileText,
    },
    {
      title: "Results",
      href: "/dashboard/student/results",
      icon: BarChart3,
    },
    {
      title: "Registration Forms",
      href: "/dashboard/student/forms",
      icon: FileText,
    },
  ]

  const teacherLinks = [
    {
      title: "Dashboard",
      href: "/dashboard/teacher",
      icon: LayoutDashboard,
    },
    {
      title: "Timetable",
      href: "/dashboard/teacher/timetable",
      icon: Calendar,
    },
    {
      title: "Classes",
      href: "/dashboard/teacher/classes",
      icon: Users,
    },
    {
      title: "Attendance",
      href: "/dashboard/teacher/attendance",
      icon: ClipboardList,
    },
    {
      title: "Assignments",
      href: "/dashboard/teacher/assignments",
      icon: FileText,
    },
    {
      title: "Grading",
      href: "/dashboard/teacher/grading",
      icon: GraduationCap,
    },
  ]

  const directorLinks = [
    {
      title: "Dashboard",
      href: "/dashboard/director",
      icon: LayoutDashboard,
    },
    {
      title: "Departments",
      href: "/dashboard/director/departments",
      icon: BookOpen,
    },
    {
      title: "Faculty",
      href: "/dashboard/director/faculty",
      icon: Users,
    },
    {
      title: "Students",
      href: "/dashboard/director/students",
      icon: GraduationCap,
    },
    {
      title: "Courses",
      href: "/dashboard/director/courses",
      icon: BookOpen,
    },
    {
      title: "Forms",
      href: "/dashboard/director/forms",
      icon: FileText,
    },
    {
      title: "Analytics",
      href: "/dashboard/director/analytics",
      icon: BarChart3,
    },
  ]

  const adminLinks = [
    {
      title: "Dashboard",
      href: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Manage Users",
      href: "/dashboard/admin/users",
      icon: Users,
    },
    {
      title: "Students",
      href: "/dashboard/admin/users?role=student",
      icon: GraduationCap,
    },
    {
      title: "Teachers",
      href: "/dashboard/admin/users?role=teacher",
      icon: BookOpen,
    },
    {
      title: "Add User",
      href: "/dashboard/admin/users/add",
      icon: UserPlus,
    },
    {
      title: "Settings",
      href: "/dashboard/admin/settings",
      icon: Settings,
    },
  ]

  // If custom items are provided, use those
  // Otherwise, select links based on role
  const links = items || (
    role === "student" ? studentLinks :
      role === "teacher" ? teacherLinks :
        role === "admin" ? adminLinks :
          directorLinks
  )

  // Get role title (capitalize first letter)
  const roleTitle = role ? (role.charAt(0).toUpperCase() + role.slice(1)) : "Dashboard"

  return (
    <div className={className}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="outline" size="icon" className="ml-2">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <SidebarContent
            links={links}
            pathname={pathname}
            role={role || ""}
            roleTitle={roleTitle}
            onLinkClick={() => setOpen(false)}
          />
        </SheetContent>
      </Sheet>

      <div className="hidden lg:block">
        <SidebarContent links={links} pathname={pathname} role={role || ""} roleTitle={roleTitle} />
      </div>
    </div>
  )
}

interface SidebarContentProps {
  links: { title: string; href: string; icon?: any }[]
  pathname: string
  role: string
  roleTitle: string
  onLinkClick?: () => void
}

function SidebarContent({ links, pathname, role, roleTitle, onLinkClick }: SidebarContentProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-14 items-center border-b px-4">
        <Link href={`/dashboard/${role}`} className="flex items-center gap-2 font-semibold" onClick={onLinkClick}>
          <School className="h-6 w-6" />
          <span>Galgotia College</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="flex flex-col gap-1 p-2">
          <p className="px-4 py-2 text-sm font-medium text-muted-foreground">{roleTitle} Portal</p>
          <ScrollArea className="h-[calc(100vh-10rem)]">
            <div className="space-y-1 p-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onLinkClick}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    pathname === link.href
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.icon && <link.icon className="h-4 w-4" />}
                  {link.title}
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
      <div className="mt-auto border-t p-4">
        <div className="flex flex-col gap-4">
          {role !== "admin" && (
            <Link
              href="/dashboard/settings"
              onClick={onLinkClick}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          )}
          <div
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
          >
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  )
}
