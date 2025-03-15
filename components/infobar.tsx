"use client"

import { useState } from "react"
import Image from "next/image"
import coin from "@/public/icons/coin.svg"
import heart from "../public/icons/red-heart.svg"
import flame from "../public/icons/fire.svg"
import { Progress } from "@/components/ui/progress"

export default function Infobar() {
    // Placeholder values for states
    const [hearts, setHearts] = useState(10)
    const [streak, setStreak] = useState(100)
    const [coins, setCoins] = useState(100)

    return (
        <div className="bg-[#0F111C] w-1/3 h-vh border-l-white border-l-1 p-3 text-white flex gap-[20vw] flex-col">
            <div id="stats" className="flex justify-between">
                <div className="flex justify-center items-center gap-1">
                    {hearts}
                    <Image src={heart} alt="hearts" />
                </div>
                <div className="flex justify-center items-center gap-1">
                    {streak}
                    <Image src={flame} alt="streaks" />
                </div>
                <div className="flex justify-center items-center gap-1">
                    {coins}
                    <Image src={coin} alt="coins" />
                </div>
            </div>
            <div id="pet-stats" className="flex flex-col gap-5">
                <div>
                    <div>Hunger</div>
                    <Progress value={40} className="" />
                </div>
                <div>
                    <div>Hygiene</div>
                    <Progress value={75} className="" />
                </div>
                <div>
                    <div>Entertainment</div>
                    <Progress value={25} className="" />
                </div>
            </div>
            <div></div>
        </div>
    )
}