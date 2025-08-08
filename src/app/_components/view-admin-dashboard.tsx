import React from 'react';
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Shield} from "lucide-react";
import {redirect} from "next/navigation";

export function ViewAdminDashboard({ hasAccess }: { hasAccess: boolean }) {
    if (!hasAccess) {
        return <div></div>
    }

    const redirectToAdminDashboard = async () => {
        redirect('/admin/dashboard');
    }

    return (
        <div>
            <Card>
                <CardContent className="flex flex-col space-y-4">
                    <Button onClick={redirectToAdminDashboard}><Shield />View Admin Dashboard</Button>
                </CardContent>
            </Card>
        </div>
    );
}