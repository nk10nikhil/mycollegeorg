import type { ReactNode } from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

interface DirectorLayoutProps {
  children: ReactNode
}

export default function DirectorLayout({ children }: DirectorLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar role="director" />
      <div className="flex-1 lg:pl-64">{children}</div>
    </div>
  )
}
