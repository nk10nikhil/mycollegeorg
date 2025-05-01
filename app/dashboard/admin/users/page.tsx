import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function UsersPage({ searchParams }: { searchParams: { role?: string } }) {
    // Default to showing all users if no role is specified
    const activeTab = searchParams.role || "all"

    // Mock user data - in a real app, this would come from a database
    const users = [
        {
            _id: "1",
            name: "Admin User",
            email: "admin@college.edu",
            role: "admin",
            createdAt: new Date("2023-01-01"),
        },
        {
            _id: "2",
            name: "John Smith",
            email: "john.smith@college.edu",
            role: "teacher",
            department: "Computer Science",
            facultyId: "FAC001",
            createdAt: new Date("2023-01-02"),
        },
        {
            _id: "3",
            name: "Jane Doe",
            email: "jane.doe@college.edu",
            role: "student",
            department: "Computer Science",
            rollNumber: "CS001",
            batch: "2021-2025",
            section: "A",
            year: 3,
            program: "B.Tech",
            branch: "CSE",
            createdAt: new Date("2023-01-03"),
        },
        {
            _id: "4",
            name: "Robert Johnson",
            email: "robert.johnson@college.edu",
            role: "student",
            department: "Electrical Engineering",
            rollNumber: "EE001",
            batch: "2022-2026",
            section: "B",
            year: 2,
            program: "B.Tech",
            branch: "EEE",
            createdAt: new Date("2023-01-04"),
        },
        {
            _id: "5",
            name: "Sarah Williams",
            email: "sarah.williams@college.edu",
            role: "teacher",
            department: "Mathematics",
            facultyId: "FAC002",
            createdAt: new Date("2023-01-05"),
        },
    ]

    // Filter users based on active tab
    const filteredUsers = activeTab === "all"
        ? users
        : users.filter((user) => user.role === activeTab)

    return (
        <div className="flex-1 space-y-4 p-6 pt-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">User Management</h2>
                <Button asChild>
                    <Link href="/dashboard/admin/users/add">Add New User</Link>
                </Button>
            </div>

            <Tabs defaultValue={activeTab} className="space-y-4">
                <TabsList>
                    <TabsTrigger value="all" asChild>
                        <Link href="/dashboard/admin/users">All Users</Link>
                    </TabsTrigger>
                    <TabsTrigger value="student" asChild>
                        <Link href="/dashboard/admin/users?role=student">Students</Link>
                    </TabsTrigger>
                    <TabsTrigger value="teacher" asChild>
                        <Link href="/dashboard/admin/users?role=teacher">Teachers</Link>
                    </TabsTrigger>
                    <TabsTrigger value="admin" asChild>
                        <Link href="/dashboard/admin/users?role=admin">Administrators</Link>
                    </TabsTrigger>
                </TabsList>

                <TabsContent value={activeTab} className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>{activeTab === "all" ? "All Users" :
                                activeTab === "student" ? "Students" :
                                    activeTab === "teacher" ? "Teachers" : "Administrators"}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {filteredUsers.length > 0 ? (
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Email</TableHead>
                                            <TableHead>Role</TableHead>
                                            {activeTab === "student" && (
                                                <>
                                                    <TableHead>Roll Number</TableHead>
                                                    <TableHead>Program</TableHead>
                                                    <TableHead>Branch</TableHead>
                                                </>
                                            )}
                                            {activeTab === "teacher" && (
                                                <>
                                                    <TableHead>Faculty ID</TableHead>
                                                    <TableHead>Department</TableHead>
                                                </>
                                            )}
                                            <TableHead>Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {filteredUsers.map((user) => (
                                            <TableRow key={user._id}>
                                                <TableCell className="font-medium">{user.name}</TableCell>
                                                <TableCell>{user.email}</TableCell>
                                                <TableCell className="capitalize">{user.role}</TableCell>
                                                {activeTab === "student" && (
                                                    <>
                                                        <TableCell>{user.rollNumber || "-"}</TableCell>
                                                        <TableCell>{user.program || "-"}</TableCell>
                                                        <TableCell>{user.branch || "-"}</TableCell>
                                                    </>
                                                )}
                                                {activeTab === "teacher" && (
                                                    <>
                                                        <TableCell>{user.facultyId || "-"}</TableCell>
                                                        <TableCell>{user.department || "-"}</TableCell>
                                                    </>
                                                )}
                                                <TableCell>
                                                    <div className="flex space-x-2">
                                                        <Button variant="outline" size="sm" asChild>
                                                            <Link href={`/dashboard/admin/users/edit/${user._id}`}>
                                                                Edit
                                                            </Link>
                                                        </Button>
                                                        <Button variant="destructive" size="sm">
                                                            Delete
                                                        </Button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            ) : (
                                <div className="text-center py-6">
                                    <p className="text-muted-foreground">No users found.</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}