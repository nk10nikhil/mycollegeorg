import { connectToDatabase } from "./db"
import { User } from "./models/user"

/**
 * Seeds the database with initial data including an admin user
 */
export async function seedDatabase() {
    try {
        console.log("Starting database seeding...")
        const { db } = await connectToDatabase()
        const usersCollection = db.collection("users")

        // Check if admin user already exists
        const existingAdmin = await usersCollection.findOne({ email: "nk10nikhil@gmail.com" })

        if (!existingAdmin) {
            // Create admin user
            const adminUser: User = {
                name: "Admin User",
                email: "nk10nikhil@gmail.com",
                password: "nk10nikhil", // In a production app, this would be hashed
                role: "admin",
                createdAt: new Date(),
                updatedAt: new Date()
            }

            await usersCollection.insertOne(adminUser)
            console.log("Admin user created successfully")
        } else {
            console.log("Admin user already exists, skipping creation")
        }

        console.log("Database seeding completed")
        return { success: true }
    } catch (error) {
        console.error("Error seeding database:", error)
        return { success: false, error }
    }
}