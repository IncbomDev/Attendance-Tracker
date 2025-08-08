import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LogOut } from 'lucide-react'
import {authClient} from "@/lib/auth-client";

interface UserHeaderProps {
    userName: string
    currentDate: string
}

export function UserHeader({ userName, currentDate }: UserHeaderProps) {
    const logout = async () => {
        await authClient.signOut()
        window.location.reload()
    }

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="text-xl">Welcome, {userName}</CardTitle>
                        <CardDescription className="text-sm">{currentDate}</CardDescription>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={logout}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <LogOut className="w-4 h-4" />
                    </Button>
                </div>
            </CardHeader>
        </Card>
    )
}
