"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export function LogoutButton({ variant = "ghost", size = "sm" }: { variant?: "ghost" | "outline" | "link", size?: "sm" | "default" }) {
    const router = useRouter()
    const { toast } = useToast()
    const [isLoggingOut, setIsLoggingOut] = useState(false)

    const handleLogout = async () => {
        setIsLoggingOut(true)

        try {
            // In a real app with a proper authentication system, 
            // you would call an API to invalidate the session/token

            // For this demo, we'll just simulate a short delay
            await new Promise(resolve => setTimeout(resolve, 500))

            // Show success message
            toast({
                title: "Logged out successfully",
                description: "You have been logged out of your account.",
            })

            // Redirect to login page
            router.push("/login")
        } catch (error) {
            console.error("Logout error:", error)
            toast({
                title: "Logout failed",
                description: "An error occurred during logout. Please try again.",
                variant: "destructive",
            })
        } finally {
            setIsLoggingOut(false)
        }
    }

    return (
        <Button
            variant={variant}
            size={size}
            onClick={handleLogout}
            disabled={isLoggingOut}
        >
            <LogOut className="h-4 w-4 mr-2" />
            {isLoggingOut ? "Logging out..." : "Logout"}
        </Button>
    )
}