import { cache } from "react";
import db from '@/database/drizzle';
import { auth } from '@clerk/nextjs/server';
import { balance, hearts, streak } from "./schema";
import { eq } from "drizzle-orm";

export const getHearts = cache( async () => {
    const { userId } = await auth();

    if (!userId)
    {
        return null;
    }

    const data = await db.query.hearts.findFirst({
        where: eq(hearts.userId, userId),
    });

    if (!data)
    {
        return null;
    }

    return {...data};
});

export const getStreaks = cache( async () => {
    const { userId } = await auth();

    if (!userId)
    {
        return null;
    }

    const data = await db.query.streak.findFirst({
        where: eq(streak.userId, userId)
    });

    if (!data)
    {
        return null;
    }

    return {...data};
});

export const getCoins = cache( async () => {
    const { userId } = await auth();

    if (!userId)
    {
        return null;
    }

    const data = await db.query.balance.findFirst({
        where: eq(balance.userId, userId),
    });

    if (!data)
    {
        return null;
    }

    return {...data};
})