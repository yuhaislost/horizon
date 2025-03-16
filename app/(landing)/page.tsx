"use client"

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function landing() {

    function parallax() {
        const scrolled = window.scrollY;
        document.getElementById("layer-4").style.top = (0 - (scrolled * 0.25)) + "px";
        document.getElementById("layer-3").style.top = (0 - (scrolled * 0.4)) + "px";
        document.getElementById("layer-2").style.top = (0 - (scrolled * 0.75)) + "px";
        document.getElementById("layer-1").style.top = (0 - (scrolled * 0.3)) + "px";
    }

    useEffect(() => {
        window.addEventListener("scroll", function () {
            parallax();
        });
    }, [])


    return ( 
        <div>
            <div className="flex justify-between items-center mr-10 ml-10 gap-5">
                <div className="pt-8 pl-4 pb-7 pr-7 flex items-center gap-x-2 w-50px">
                    <Image src={'/logo/PictorialMark.png'} width={100} height={100} alt="Galileo" className="rotate-[225deg]" />
                    <span className="text-6xl font-extrabold text-primary tracking-wide">Galileo</span>
                </div>
                <div className="flex gap-5">
                    <Button variant="primary" className="text-2xl ">Login</Button>
                    <Button variant="primary" className="text-2xl">Sign Up</Button>
                </div>
            </div>

            <div className="h-[4600px] flex justify-center">
                <div id="layer-1" className="z-0 fixed block bg-no-repeat w-screen max-w-[2000px]">
                    <div className="top-[300px] ml-[60%] right-[15%] absolute text-5xs">Struggling to study? Galileo transforms your notes into fun, interactive games!</div>
                    <div className="top-[1050px] left-30 absolute text-5xs">Education should be free—Galileo gives you unlimited access with no ads, ever.</div>
                    <div className="top-[1600px] left-[15vw] absolute text-5xs">From classrooms to remote villages, Galileo makes quality learning accessible to everyone.</div>
                </div>
            

                <div id="layer-2" className="z-3 fixed block bg-no-repeat w-screen max-w-[2000px]">
                    <Image src={'/planets/1.png'} height={1000} width={1000} alt="earth" className="w-[50%] min-w-[500px] top-[100px] absolute" />
                    <Image src={'/planets/2.png'} height={500} width={500} alt="earth" className="w-[30%] min-w-[300px] absolute top-[850px] right-[70px]" />
                    <Image src={'/planets/3.png'} height={500} width={500} alt="earth" className="w-[40%] min-w-[400px] top-[2000px] left-[300px] absolute" />
                    <Image src={'/planets/10.png'} height={500} width={500} alt="earth" className="w-[60%] min-w-[700px] mr-2 top-[3300px] left-[50%] absolute" />
                </div>
                <div id="layer-3" className="z-2 fixed block bg-no-repeat w-[1200px]">
                    <Image src={'/logo/spaceStars.svg'} width={25} height={25} alt="star" className="top-[100px] right-[310px] absolute" />
                    <Image src={'/logo/spaceStars.svg'} width={15} height={15} alt="star" className="top-[700px] left-[310px] absolute" />
                    <Image src={'/logo/spaceStars.svg'} width={35} height={35} alt="star" className="top-[1200px] right-[410px] absolute" />
                    <Image src={'/logo/spaceStars.svg'} width={30} height={30} alt="star" className="top-[1700px] left-[510px] absolute" />
                    <Image src={'/logo/spaceStars.svg'} width={25} height={25} alt="star" className="top-[1500px] right-[180px] absolute"/>
                    <Image src={'/background/glowingStar1.png'} width={60} height={60} alt="star" className="top-[400px] right-[140px] absolute"/>
                    <Image src={'/background/glowingStar2.png'} width={200} height={200} alt="star" className="top-[950px] left-[50%] absolute"/>
                </div>
                
                <div id="layer-4" className="z-1 fixed block bg-no-repeat w-[1200px]">
                    <Image src={'/logo/spaceStars.svg'} width={50} height={50} alt="star" className="top-[200px] left-[510px] absolute" />
                    <Image src={'/logo/spaceStars.svg'} width={50} height={50} alt="star" className="top-[200px] left-[510px] absolute blur-2xl" />

                    <Image src={'/logo/spaceStars.svg'} width={10} height={10} alt="star" className="top-[1550px] right-[110px] absolute"/>
                    <Image src={'/logo/spaceStars.svg'} width={10} height={10} alt="star" className="top-[1600px] left-[110px] absolute"/>
                    <Image src={'/background/glowingStar1.png'} width={100} height={100} alt="star" className="top-[800px] right-[140px] absolute"/>
                    <Image src={'/background/glowingStar1.png'} width={125} height={125} alt="star" className="top-[1200px] left-[110px] absolute"/>
                    <Image src={'/background/glowingStar2.png'} width={100} height={100} alt="star" className="top-[1500px] right-[210px] absolute"/>
                    <Image src={'/logo/spaceStars.svg'} width={40} height={40} alt="star" className="top-[750px] right-[210px] absolute rotate-45" />
                </div>
            </div >
        </div>
    );
}