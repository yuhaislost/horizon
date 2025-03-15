import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import Link from "next/link"
import Quiz_Popup from "./quiz_popup"
import Image from "next/image"
import rocket from "@/public/icons/rocket.svg"
import headstone from "@/public/icons/headstone.svg"
import dizzy from "@/public/icons/dizzy.svg"
import pet from "@/public/icons/palm-down-hand-default.svg"


export default function Navbar() {
    return (
        <Sidebar>
            <SidebarContent className="w-full bg-[#0F111C] text-white ">
                <SidebarGroup  />
                <SidebarGroupLabel className="m-10 mb-0 text-3xl text-[#E9D393] font-bold">Galileo</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu className="gap-10 m-10 font-bold">

                        <SidebarMenuItem className="flex flex-row">
                            <Image src={rocket} alt="rocket" />
                            <SidebarMenuButton asChild>
                                <Link href="/">HOME</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem className="flex flex-row">
                            <Image src={headstone} alt="headstone" />
                            <SidebarMenuButton asChild>
                                <Link href="/graveyard">GRAVEYARD</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem className="flex flex-row">
                            <Image src={dizzy} alt="dizzy" />
                            <SidebarMenuButton asChild>
                                <Link href="/leaderboard">LEADERBOARD</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem className="flex flex-row">
                            <Image src={pet} alt="petting hand" />
                            <SidebarMenuButton asChild>
                                <Link href="/pet">PET</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <Quiz_Popup></Quiz_Popup>
                        </SidebarMenuItem>


                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarContent>
        </Sidebar>
    )
}