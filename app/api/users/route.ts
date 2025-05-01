import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/db"

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    const role = searchParams.get("role")

    try {
        const { db } = await connectToDatabase()
        const usersCollection = db.collection("users")

        // If ID is provided, return a single user
        if (id) {
            const user = await usersCollection.findOne({ _id: id })
            return user
                ? NextResponse.json({ user })
                : NextResponse.json({ error: "User not found" }, { status: 404 })
        }

        // If role is provided, filter by role
        let query = {}
        if (role) {
            query = { role }
        }

        // Get all users or filtered by role
        const users = await usersCollection.find(query).toArray()
        return NextResponse.json({ users })
    } catch (error) {
        console.error("Database error:", error)
        return NextResponse.json({ error: "Error fetching users" }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const userData = await request.json()

        // Validate required fields
        if (!userData.name || !userData.email || !userData.password || !userData.role) {
            return NextResponse.json(
                { error: "Missing required fields: name, email, password, role" },
                { status: 400 }
            )
        }

        // Connect to database
        const { db } = await connectToDatabase()
        const usersCollection = db.collection("users")

        // Check if email already exists
        const existingUser = await usersCollection.findOne({ email: userData.email })
        if (existingUser) {
            return NextResponse.json(
                { error: "Email already exists" },
                { status: 409 }
            )
        }

        // Add timestamps
        const newUser = {
            ...userData,
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        // Insert user
        const result = await usersCollection.insertOne(newUser)

        return NextResponse.json({
            message: "User created successfully",
            userId: result.insertedId
        }, { status: 201 })
    } catch (error) {
        console.error("Error creating user:", error)
        return NextResponse.json(
            { error: "Error creating user" },
            { status: 500 }
        )
    }
}

export async function PUT(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const id = searchParams.get("id")

        if (!id) {
            return NextResponse.json(
                { error: "User ID is required" },
                { status: 400 }
            )
        }

        const userData = await request.json()

        // Connect to database
        const { db } = await connectToDatabase()
        const usersCollection = db.collection("users")

        // Don't allow changing email to one that already exists
        if (userData.email) {
            const existingUser = await usersCollection.findOne({
                email: userData.email,
                _id: { $ne: id } // Not the same user
            })

            if (existingUser) {
                return NextResponse.json(
                    { error: "Email already exists" },
                    { status: 409 }
                )
            }
        }

        // Update user
        const updatedUser = {
            ...userData,
            updatedAt: new Date(),
        }

        const result = await usersCollection.updateOne(
            { _id: id },
            { $set: updatedUser }
        )

        if (result.modifiedCount === 0) {
            return NextResponse.json(
                { error: "User not found or no changes made" },
                { status: 404 }
            )
        }

        return NextResponse.json({
            message: "User updated successfully"
        })
    } catch (error) {
        console.error("Error updating user:", error)
        return NextResponse.json(
            { error: "Error updating user" },
            { status: 500 }
        )
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const id = searchParams.get("id")

        if (!id) {
            return NextResponse.json(
                { error: "User ID is required" },
                { status: 400 }
            )
        }

        // Connect to database
        const { db } = await connectToDatabase()
        const usersCollection = db.collection("users")

        // Delete user
        const result = await usersCollection.deleteOne({ _id: id })

        if (result.deletedCount === 0) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            )
        }

        return NextResponse.json({
            message: "User deleted successfully"
        })
    } catch (error) {
        console.error("Error deleting user:", error)
        return NextResponse.json(
            { error: "Error deleting user" },
            { status: 500 }
        )
    }
}