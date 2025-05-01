import type { ReactNode } from "react"

interface DashboardLayoutProps {
  children: ReactNode
  params: {
    role?: string
  }
}

export default function DashboardLayout({ children, params }: DashboardLayoutProps) {
  // This layout is used by all dashboard pages
  // The actual sidebar is rendered in each role-specific layout
  return <div className="min-h-screen bg-muted/40">{children}</div>
}
