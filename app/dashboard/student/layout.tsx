import type { ReactNode } from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

interface StudentLayoutProps {
  children: ReactNode
}

export default function StudentLayout({ children }: StudentLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar role="student" />
      <div className="flex-1 lg:pl-64">{children}</div>
    </div>
  )
}
