import { NextRequest, NextResponse } from "next/server"
import { seedDatabase } from "@/lib/seed"

// This route is used to seed the database with initial data
// including the admin user with email "nk10nikhil@gmail.com" and password "nk10nikhil"
export async function GET(request: NextRequest) {
    try {
        const result = await seedDatabase()

        if (result.success) {
            return NextResponse.json({
                message: "Database seeded successfully. Admin user created or verified.",
                credentials: {
                    email: "nk10nikhil@gmail.com",
                    password: "nk10nikhil"
                }
            })
        } else {
            return NextResponse.json({
                error: "Failed to seed database",
                details: result.error
            }, { status: 500 })
        }
    } catch (error) {
        console.error("Error in seed API route:", error)
        return NextResponse.json({
            error: "An error occurred while seeding the database"
        }, { status: 500 })
    }
}