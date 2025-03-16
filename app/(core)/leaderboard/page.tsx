"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { useState } from "react";

const user1 = {
    id: 1,
    username: 'Bob',
    streak: 100
}

const user2 = {
    id: 2,
    username: 'Dave',
    streak: 85
}

const user3 = {
    id: 3,
    username: 'Daniel',
    streak: 80
}

const user4 = {
    id: 4,
    username: 'Jared',
    streak: 72
}
const user5 = {
    id: 5,
    username: 'Landen',
    streak: 62
}
const user6 = {
    id: 6,
    username: 'Jordan',
    streak: 42
}
const user7 = {
    id: 7,
    username: 'Mike',
    streak: 2
}

export default function leaderboard({ children }: { children: React.ReactNode }) {
    const [users, setUsers] = useState([user1, user2, user3, user4, user5, user6, user7])

    return (
        <div className="flex justify-center items-center h-full">
            <ScrollArea className="h-[70vh] w-[40vw] rounded-md border">
                <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium leading-none">Leaderboard</h4>
                    {users.map((user, i = 0) => {
                        return (
                            <div key={user.id}>
                                <div className="text-sm flex flex-row justify-between hover:scale-95">
                                    <div className="flex justify-center items-center gap-5">
                                        <img src="/icons/profile.png" alt="profile" width={28} height={28} className="fill-white" />
                                        <div>{i + 1}. {user.username}</div>
                                    </div>
                                    <div className="flex flex-row g-5 justify-center items-center">
                                        <img src={'/icons/fire.svg'} height={28} width={28} alt="Streaks" className="mr-2" />
                                        {user.streak}</div>
                                </div>
                                <Separator className="my-2" />
                            </div>
                        )
                    })}
                </div>
            </ScrollArea>
        </div>
    );
}