import AttendanceTracker from "@/app/_components/attendance-tracker";
import {headers} from "next/headers";
import {auth} from "@/lib/auth";
import {getCheckedInTime, getStatus} from "@/app/_actions/server-actions";

export default async function Home() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    let isCheckedIn = false;
    let checkInTime: Date | undefined = undefined;

    if (session && session.user) {
        isCheckedIn = await getStatus(session.user.id) === 'checked-in';
        if (isCheckedIn) {
            checkInTime = await getCheckedInTime(session.user.id) || undefined;
        }
    }

    return (
        <div>
            <AttendanceTracker session={session} isCheckedIn={isCheckedIn} checkInTime={checkInTime} />
        </div>
    );
}
