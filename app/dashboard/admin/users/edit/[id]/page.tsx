"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EditUserPage({ params }: { params: { id: string } }) {
    const userId = params.id
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [isFetching, setIsFetching] = useState(true)

    // User data state
    const [user, setUser] = useState<{
        _id?: string
        name: string
        email: string
        role: "student" | "teacher" | "director" | "admin"
        department?: string
        rollNumber?: string
        facultyId?: string
        directorId?: string
        batch?: string
        section?: string
        year?: number
        program?: string
        branch?: string
    }>({
        name: "",
        email: "",
        role: "student",
        department: "",
        rollNumber: "",
        facultyId: "",
        directorId: "",
        batch: "",
        section: "",
        year: undefined,
        program: "",
        branch: "",
    })

    // Fetch user data
    useEffect(() => {
        const fetchUser = async () => {
            setIsFetching(true)
            try {
                // In a real app, this would be an API call to fetch the user by ID
                // For demo purposes, we'll use mock data
                const mockUsers = [
                    {
                        _id: "1",
                        name: "Admin User",
                        email: "admin@college.edu",
                        role: "admin",
                        department: "",
                    },
                    {
                        _id: "2",
                        name: "John Smith",
                        email: "john.smith@college.edu",
                        role: "teacher",
                        department: "Computer Science",
                        facultyId: "FAC001",
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
                    },
                ]

                const foundUser = mockUsers.find((u) => u._id === userId)
                if (foundUser) {
                    setUser(foundUser)
                } else {
                    console.error("User not found")
                    // Redirect to users page if user not found
                    router.push("/dashboard/admin/users")
                }
            } catch (error) {
                console.error("Error fetching user:", error)
            } finally {
                setIsFetching(false)
            }
        }

        fetchUser()
    }, [userId, router])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setUser((prev) => ({ ...prev, [id]: value }))
    }

    const handleSelectChange = (field: string, value: string) => {
        setUser((prev) => ({ ...prev, [field]: value }))
    }

    const handleYearChange = (value: string) => {
        setUser((prev) => ({ ...prev, year: parseInt(value) }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            // In a real app, this would be an API call to update the user
            console.log("Updating user:", user)

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000))

            // Redirect back to the users page
            router.push("/dashboard/admin/users")
            router.refresh()
        } catch (error) {
            console.error("Error updating user:", error)
        } finally {
            setIsLoading(false)
        }
    }

    if (isFetching) {
        return (
            <div className="flex-1 space-y-4 p-6 pt-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight">Edit User</h2>
                </div>
                <Card>
                    <CardContent className="p-6">
                        <div className="text-center py-4">Loading user data...</div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="flex-1 space-y-4 p-6 pt-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Edit User</h2>
                <Button variant="outline" onClick={() => router.back()}>
                    Cancel
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>
                        Edit {user.role === "student" ? "Student" : user.role === "teacher" ? "Teacher" : "Administrator"}
                    </CardTitle>
                    <CardDescription>
                        Update the details for {user.name}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Common fields for all user types */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Enter full name"
                                    value={user.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter email address"
                                    value={user.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="department">Department</Label>
                            <Select
                                value={user.department || ""}
                                onValueChange={(value) => handleSelectChange("department", value)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select department" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Computer Science">Computer Science</SelectItem>
                                    <SelectItem value="Electrical Engineering">Electrical Engineering</SelectItem>
                                    <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                                    <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
                                    <SelectItem value="Mathematics">Mathematics</SelectItem>
                                    <SelectItem value="Physics">Physics</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Student-specific fields */}
                        {user.role === "student" && (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="rollNumber">Roll Number</Label>
                                        <Input
                                            id="rollNumber"
                                            placeholder="Enter roll number"
                                            value={user.rollNumber || ""}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="batch">Batch</Label>
                                        <Input
                                            id="batch"
                                            placeholder="e.g., 2021-2025"
                                            value={user.batch || ""}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="program">Program</Label>
                                        <Select
                                            value={user.program || ""}
                                            onValueChange={(value) => handleSelectChange("program", value)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select program" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="B.Tech">B.Tech</SelectItem>
                                                <SelectItem value="M.Tech">M.Tech</SelectItem>
                                                <SelectItem value="Ph.D">Ph.D</SelectItem>
                                                <SelectItem value="BCA">BCA</SelectItem>
                                                <SelectItem value="MCA">MCA</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="branch">Branch</Label>
                                        <Select
                                            value={user.branch || ""}
                                            onValueChange={(value) => handleSelectChange("branch", value)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select branch" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="CSE">CSE</SelectItem>
                                                <SelectItem value="ECE">ECE</SelectItem>
                                                <SelectItem value="EEE">EEE</SelectItem>
                                                <SelectItem value="ME">ME</SelectItem>
                                                <SelectItem value="CE">CE</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="year">Current Year</Label>
                                        <Select
                                            value={user.year?.toString() || ""}
                                            onValueChange={handleYearChange}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select year" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1">1st Year</SelectItem>
                                                <SelectItem value="2">2nd Year</SelectItem>
                                                <SelectItem value="3">3rd Year</SelectItem>
                                                <SelectItem value="4">4th Year</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="section">Section</Label>
                                    <Select
                                        value={user.section || ""}
                                        onValueChange={(value) => handleSelectChange("section", value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select section" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="A">Section A</SelectItem>
                                            <SelectItem value="B">Section B</SelectItem>
                                            <SelectItem value="C">Section C</SelectItem>
                                            <SelectItem value="D">Section D</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </>
                        )}

                        {/* Teacher-specific fields */}
                        {user.role === "teacher" && (
                            <div className="space-y-2">
                                <Label htmlFor="facultyId">Faculty ID</Label>
                                <Input
                                    id="facultyId"
                                    placeholder="Enter faculty ID"
                                    value={user.facultyId || ""}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        )}

                        <div className="flex justify-end pt-4">
                            <Button type="submit" disabled={isLoading}>
                                {isLoading ? "Saving..." : "Save Changes"}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}