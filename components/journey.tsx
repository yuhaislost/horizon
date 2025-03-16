"use client"

import { useEffect, useRef, useState } from "react";
import MakeQuiz from "./make-quix";
import Image from "next/image";
import { Progress } from "@/components/ui/progress"


export default function Journey() {
    const [expeditions, setExpeditions] = useState([1, 2, 3, 4])
    const planetCoor = [800, 1000, 750, 950, 850]

    function parallax() {
        const scrolled = window.scrollY;
        document.getElementById("layer-4").style.top = (0 - (scrolled * 0.25)) + "px";
        document.getElementById("layer-3").style.top = (0 - (scrolled * 0.4)) + "px";
        document.getElementById("layer-2").style.top = (0 - (scrolled * 0.75)) + "px";
    }

    useEffect(() => {
        window.addEventListener("scroll", function () {
            parallax();
        });
    }, [])

    return (
        <div>
            <div className="flex justify-center min-w-[100vw - 256px] w-full">
                <div id="layer-2" className="z-3 flex justify-center items-center flex-col gap-30 w-full min-w-[100vw - 256px] m-[25px] ">
                    <img src={'/planets/4.png'} height={500} width={500} alt="earth" className="w-[200px]" />
                    {expeditions ? expeditions.map((expedition, i = 0) => {
                        i++
                        return (
                            <img key={i} src={`/planets/${i % 6 + 1}.png`} height={500} width={500} alt="earth" className={`w-[125px]`} />
                        )
                    })
                        :
                        <div></div>
                    }
                    <MakeQuiz />
                </div>

                <div id="layer-3" className="z-2 fixed block bg-no-repeat w-full]">
                    <Image src={'/logo/spaceStars.svg'} width={25} height={25} alt="star" className="top-[430px] left-[310px] absolute" />
                    <Image src={'/logo/spaceStars.svg'} width={15} height={15} alt="star" className="top-[700px] left-[800px] absolute" />
                    <Image src={'/logo/spaceStars.svg'} width={35} height={35} alt="star" className="top-[910px] left-[410px] absolute" />
                    <Image src={'/logo/spaceStars.svg'} width={30} height={30} alt="star" className="top-[650px] left-[510px] absolute" />
                    <Image src={'/logo/spaceStars.svg'} width={25} height={25} alt="star" className="top-[550px] left-[720px] absolute" />
                    <Image src={'/background/glowingStar1.png'} width={60} height={60} alt="star" className="top-[400px] left-[140px] absolute" />
                    <Image src={'/background/glowingStar2.png'} width={200} height={200} alt="star" className="top-[550px] left-[400px] absolute" />
                </div>

                <div id="layer-4" className="z-1 fixed block bg-no-repeat w-full">
                    <Image src={'/logo/spaceStars.svg'} width={50} height={50} alt="star" className="top-[200px] left-[510px] absolute" />
                    <Image src={'/logo/spaceStars.svg'} width={50} height={50} alt="star" className="top-[200px] left-[510px] absolute blur-2xl" />

                    <Image src={'/logo/spaceStars.svg'} width={10} height={10} alt="star" className="top-[360px] left-[250px] absolute" />
                    <Image src={'/logo/spaceStars.svg'} width={10} height={10} alt="star" className="top-[250px] left-[730px] absolute" />
                    <Image src={'/logo/spaceStars.svg'} width={30} height={30} alt="star" className="top-[250px] left-[1200px] absolute" />
                    <Image src={'/background/glowingStar1.png'} width={100} height={100} alt="star" className="top-[840px] left-[370px] absolute" />
                    <Image src={'/background/glowingStar1.png'} width={125} height={125} alt="star" className="top-[510px] left-[820px] absolute" />
                    <Image src={'/background/glowingStar2.png'} width={100} height={100} alt="star" className="top-[400px] left-[500px] absolute" />
                    <Image src={'/logo/spaceStars.svg'} width={40} height={40} alt="star" className="top-[750px] left-[1000px] absolute rotate-45" />
                </div>
            </div>
        </div>
    )
}