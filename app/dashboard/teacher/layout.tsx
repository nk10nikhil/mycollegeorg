import type { ReactNode } from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

interface TeacherLayoutProps {
  children: ReactNode
}

export default function TeacherLayout({ children }: TeacherLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar role="teacher" />
      <div className="flex-1 lg:pl-64">{children}</div>
    </div>
  )
}
