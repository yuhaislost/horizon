import { SideWrapper } from "@/components/side-wrapper";
import { UserStats } from "@/components/user-stats";
import { getCoins, getHearts, getStreaks } from "@/database/queries";
import Image from "next/image";
import { redirect } from "next/navigation";
import Journey from "@/components/journey";


const LearnPage = async () => {
    const userHeartsPromise = getHearts();
    const userStreaksPromise = getStreaks();
    const userCoinsPromise = getCoins();

    const [userHearts, userStreaks, userCoins] = await Promise.all([userHeartsPromise, userStreaksPromise, userCoinsPromise]);

    // if (!userHearts || !userStreaks || !userCoins)
    // {
    // redirect('/');
    // }

    return (
        <div className="flex flex-row-reverse gap-[48px] lg:px-6 h-full w-full">
            <SideWrapper>
                <UserStats hearts={1} streaks={1} coins={1} />
            </SideWrapper>
            <Journey></Journey>

        </div>
    );
}

export default LearnPage;