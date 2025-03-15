import { SideWrapper } from "@/components/side-wrapper";
import { UserStats } from "@/components/user-stats";
import { getCoins, getHearts, getStreaks } from "@/database/queries";
import Image from "next/image";
import { redirect } from "next/navigation";


const LearnPage = async () => {
    const userHeartsPromise = getHearts();
    const userStreaksPromise = getStreaks();
    const userCoinsPromise = getCoins();

    const [ userHearts, userStreaks, userCoins] = await Promise.all([userHeartsPromise, userStreaksPromise, userCoinsPromise]);

    if (!userHearts || !userStreaks || !userCoins)
    {
        redirect('/');
    }
    
    return (
        <div className="flex flex-row-reverse gap-[48px] lg:px-6">
            <SideWrapper>
                <UserStats hearts={userHearts.ammount!} streaks={userStreaks.ammount!} coins={userCoins.ammount!}/>
            </SideWrapper>
            <div className="flex relative top-0 pb-10">
                {/* <Image src={'/planets/4.png'} alt="Earth" width={300} height={300}/> */}
            </div>
        </div>
    );
}

export default LearnPage;