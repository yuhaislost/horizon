'use server';

import db from "@/database/drizzle";
import { getHearts } from "@/database/queries";
import { hearts } from "@/database/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const reduceHearts = async (pUserId: string) => {
    const { userId } = await auth();

    if (!userId)
    {
        throw new Error("Unauthenticated");
    }

    if (pUserId !== userId)
    {
        throw new Error("Unauthorised");
    }

    const userHeartData = await getHearts();

    if (!userHeartData)
    {
        throw new Error("User does not have any heart data");
    }

    await db.update(hearts).set({
        ammount: Math.max(0, userHeartData.ammount - 1),
    }).where(eq(hearts.userId, userId));
    
    revalidatePath('/quiz');
    revalidatePath('/graveyard');
    revalidatePath('/leaderboard');
    revalidatePath('/pet');
    revalidatePath('/study');
}