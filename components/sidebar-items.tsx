'use client';

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface SidebarItemProps{
    label: string;
    href: string;
    iconSrc: string;
};

export const SidebarItem = ({ label, href, iconSrc } : SidebarItemProps) => {
    
    const urlPath = usePathname();
    const itemActive = href == urlPath ? true : false;

    return(
        <Button variant={itemActive ? "sidebarOutline" : "sidebar"} className="justify-start h-[60px]"asChild>
            <Link href={href} className="text-center">
                <Image alt={label} height={32} width={32} className="mr-5" src={iconSrc}/>
                <span className="uppercase font-bold">{ label }</span>
            </Link>
        </Button>
    );
}