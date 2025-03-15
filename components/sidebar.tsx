import Link from "next/link"
import { SidebarItem } from "./sidebar-items"
import Image from "next/image"


export const Sidebar = () => {
    return (
        <div className="flex flex-col h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 lg:border-r-2 border-secondary">
            <Link href={"/study"}>
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-2">
                    <Image src={'/logo/PictorialMark.png'} width={50} height={50} alt="Galileo" className="rotate-[225deg]"/>
                    <span className="text-xl font-extrabold text-primary tracking-wide">Galileo</span>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2">
                <SidebarItem label="Home" iconSrc={"/icons/rocket.svg"} href="/study"/>
                <SidebarItem label="Graveyard" iconSrc={"/icons/headstone.svg"} href="/graveyard"/>
                <SidebarItem label="Leaderboard" iconSrc={"/icons/dizzy.svg"} href="/leaderboard"/>
                <SidebarItem label="Pet" iconSrc={"/icons/pet.svg"} href="/pet"/>
            </div>
        </div>
    )
}