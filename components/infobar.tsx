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
    const [hunger, setHunger] = useState(40)
    const [hygiene, setHygiene] = useState(75)
    const [entertainment, setEntertainment] = useState(25)

    return (
        <div className="bg-[#0F111C] w-1/3 h-vh border-l-white border-l-1 p-3 text-white flex gap-[20vw] flex-col">
            <div id="stats" className="flex justify-between">
                <div className="flex justify-center items-center gap-1">
                    <Image src={heart} alt="hearts" />
                    {hearts}
                </div>
                <div className="flex justify-center items-center gap-1">
                    <Image src={flame} alt="streaks" />
                    {streak}
                </div>
                <div className="flex justify-center items-center gap-1">
                    <Image src={coin} alt="coins" />
                    {coins}
                </div>
            </div>
            <div id="pet-stats" className="flex flex-col gap-5">
                <div>
                    <div>Hunger</div>
                    <Progress value={hunger} className="" />
                </div>
                <div>
                    <div>Hygiene</div>
                    <Progress value={hygiene} className="" />
                </div>
                <div>
                    <div>Entertainment</div>
                    <Progress value={entertainment} className="" />
                </div>
            </div>
            <div></div>
        </div>
    )
}