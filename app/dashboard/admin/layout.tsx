import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function AdminDashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const sidebarNavItems = [
        {
            title: "Dashboard",
            href: "/dashboard/admin",
        },
        {
            title: "Manage Users",
            href: "/dashboard/admin/users",
        },
        {
            title: "Settings",
            href: "/dashboard/admin/settings",
        },
    ]

    return (
        <div className="flex min-h-screen flex-col">
            <div className="flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
                <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
                    <DashboardSidebar items={sidebarNavItems} className="py-6" />
                </aside>
                <main className="flex w-full flex-col overflow-hidden">{children}</main>
            </div>
        </div>
    )
}