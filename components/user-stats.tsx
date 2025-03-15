import Image from "next/image";

interface UserStatsProps{
    hearts: number;
    streaks: number;
    coins: number;
};

export const UserStats = ({ hearts, streaks, coins } : UserStatsProps) => {
    return(
        <div className="flex items-center justify-between gap-x-2 w-full">
            <div className="flex flex-row text-center justify-center">
                <Image src={'/icons/red-heart.svg'} height={28} width={28} alt="Hearts" className="mr-2"/>
                <span className="self-center font-semibold">{ hearts }</span>
            </div>
            <div className="flex flex-row text-center justify-center">
                <Image src={'/icons/fire.svg'} height={28} width={28} alt="Streaks" className="mr-2"/>
                <span className="self-center font-semibold">{ streaks }</span>
            </div>
            <div className="flex flex-row text-center justify-center">
                <Image src={'/icons/coin.svg'} height={28} width={28} alt="Coins" className="mr-2"/>
                <span className="self-center font-semibold">{ coins }</span>
            </div>
        </div>
    );
}

