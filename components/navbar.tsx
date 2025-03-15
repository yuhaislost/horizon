import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Textarea } from "@/components/ui/textarea"


import Link from "next/link"


export default function Navbar() {
    return (
        <>
            <div >
                <Menubar>
                    <MenubarMenu>
                        <Link href="/pet">Profile</Link>
                    </MenubarMenu>

                    <MenubarMenu>
                        <Dialog>
                            <DialogTrigger>Quiz</DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Upload text to start generating questions!</DialogTitle>
                                    <DialogDescription>
                                        <Textarea />
                                        <Link href="/quiz">Start Quiz!</Link>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>

                    </MenubarMenu>

                    <MenubarMenu>
                        <MenubarTrigger>
                            <Link href="/leaderboard">Leaderboard</Link>
                        </MenubarTrigger>
                    </MenubarMenu>
                </Menubar>

            </div>
        </>
    )
}