import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {Slack, User} from 'lucide-react'
import {authClient} from "@/lib/auth-client";

export function LoginForm() {
    const signIn = async () => {
        const data = await authClient.signIn.social({ provider: "slack" });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold">Spike Attendance</CardTitle>
                    <CardDescription>Login with your 293 Spike Slack account to get started</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col space-y-4">
                    <Button onClick={signIn}><Slack />Sign in with Slack</Button>
                </CardContent>
            </Card>
        </div>
    )
}
