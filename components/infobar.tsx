"use client"

import { useState } from "react"

export default function Infobar() {
    // Placeholder values for states
    const [hearts, setHearts] = useState(10)
    const [streak, setStreak] = useState(100)
    const [coins, setCoins] = useState(100)

    return(
        <div className="bg-[#0F111C;] w-1/3 h-screen border-l-white border-l-1 p-3 text-white">
                <div id="stats" className="flex justify-between">
                    <div>
                        {hearts}
                    </div>
                    <div>
                        {streak}
                    </div>
                    <div>
                        {coins}
                    </div>
                </div>
        </div>
    )
}