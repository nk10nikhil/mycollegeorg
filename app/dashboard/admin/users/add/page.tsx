"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AddUserPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [activeTab, setActiveTab] = useState("student")

    // Common form values
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [department, setDepartment] = useState("")

    // Student-specific form values
    const [rollNumber, setRollNumber] = useState("")
    const [batch, setBatch] = useState("")
    const [section, setSection] = useState("")
    const [year, setYear] = useState<number | undefined>(undefined)
    const [program, setProgram] = useState("")
    const [branch, setBranch] = useState("")

    // Teacher-specific form values
    const [facultyId, setFacultyId] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Create the user object based on the active tab (role)
        const user = {
            name,
            email,
            password,
            role: activeTab,
            department,
            ...(activeTab === "student" && {
                rollNumber,
                batch,
                section,
                year,
                program,
                branch,
            }),
            ...(activeTab === "teacher" && {
                facultyId,
            }),
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        try {
            // In a real app, this would be an API call to create the user
            console.log("Creating user:", user)

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000))

            // Redirect back to the users page
            router.push("/dashboard/admin/users")
            router.refresh()
        } catch (error) {
            console.error("Error creating user:", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex-1 space-y-4 p-6 pt-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Add New User</h2>
                <Button variant="outline" onClick={() => router.back()}>
                    Cancel
                </Button>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
                <TabsList>
                    <TabsTrigger value="student">Student</TabsTrigger>
                    <TabsTrigger value="teacher">Teacher</TabsTrigger>
                    <TabsTrigger value="admin">Administrator</TabsTrigger>
                </TabsList>

                <Card>
                    <CardHeader>
                        <CardTitle>
                            {activeTab === "student"
                                ? "Add New Student"
                                : activeTab === "teacher"
                                    ? "Add New Teacher"
                                    : "Add New Administrator"}
                        </CardTitle>
                        <CardDescription>
                            Enter the details to create a new {activeTab}.
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
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="department">Department</Label>
                                    <Select value={department} onValueChange={setDepartment}>
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
                            </div>

                            {/* Student-specific fields */}
                            {activeTab === "student" && (
                                <>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="roll-number">Roll Number</Label>
                                            <Input
                                                id="roll-number"
                                                placeholder="Enter roll number"
                                                value={rollNumber}
                                                onChange={(e) => setRollNumber(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="batch">Batch</Label>
                                            <Input
                                                id="batch"
                                                placeholder="e.g., 2021-2025"
                                                value={batch}
                                                onChange={(e) => setBatch(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="program">Program</Label>
                                            <Select value={program} onValueChange={setProgram}>
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
                                            <Select value={branch} onValueChange={setBranch}>
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
                                                value={year?.toString() || ""}
                                                onValueChange={(value) => setYear(parseInt(value))}
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
                                        <Select value={section} onValueChange={setSection}>
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
                            {activeTab === "teacher" && (
                                <div className="space-y-2">
                                    <Label htmlFor="faculty-id">Faculty ID</Label>
                                    <Input
                                        id="faculty-id"
                                        placeholder="Enter faculty ID"
                                        value={facultyId}
                                        onChange={(e) => setFacultyId(e.target.value)}
                                        required
                                    />
                                </div>
                            )}

                            <div className="flex justify-end pt-4">
                                <Button type="submit" disabled={isLoading}>
                                    {isLoading ? "Creating..." : "Create User"}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </Tabs>
        </div>
    )
}