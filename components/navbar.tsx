import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

import Link from "next/link"


export default function Navbar() {
    return (
        <>
            <div className="w-full h-full">
                <Menubar>
                    <MenubarMenu>
                    <MenubarTrigger>
                            <Link href="/pet">Profile</Link>
                        </MenubarTrigger>
                    </MenubarMenu>

                    <MenubarMenu>
                        <MenubarTrigger>
                            <Link href="/quiz">Quiz</Link>
                        </MenubarTrigger>
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