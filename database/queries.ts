import { cache } from "react";
import db from '@/database/drizzle';
import { auth } from '@clerk/nextjs/server';
import { balance, expedition, hearts, question, streak } from "./schema";
import { eq, and } from "drizzle-orm";

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
});

export const getExpeditionQuestions = cache( async (id: number) => {
    const { userId } = await auth();

    if (!userId)
    {
        return null;
    }

    const expeditionData = await db.query.expedition.findFirst({
        where: eq(expedition.id, id)
    });

    if (!expeditionData|| expeditionData.userId != userId)
    {
        return null;
    }

    const questionsData = await db.query.question.findMany({
        where: eq(question.expeditionId, id)
    });

    return questionsData;
});

export const getExpedition = cache( async (id: number) => {
    const { userId } = await auth();

    if (!userId)
    {
        return null;
    }

    const expeditionData = await db.query.expedition.findFirst({
        where: and(eq(expedition.userId, userId), eq(expedition.id, id)),
    });

    if (!expeditionData)
    {
        return null;
    }


    return expeditionData;
});

export const getQuestion = cache( async (id: number) => {
    const { userId } = await auth();

    if (!userId)
    {
        return null;
    }

    const questionData = await db.query.question.findFirst({
        where: eq(question.id, id)
    });

    if (!questionData)
    {
        return null;
    }

    if (questionData.userId != userId)
    {
        return null;
    }

    return questionData;
})      

export const getCurrentExpedition =  cache ( async () => {
    const { userId } = await auth();

    if (!userId)
    {
        return null;
    }

    const expeditionData = await db.query.expedition.findFirst({
        where: and(eq(expedition.userId, userId), eq(expedition.completed, false))
    });

    if (!expeditionData)
    {
        return null;
    }

    const questions = await db.query.question.findMany({
        where: eq(question.expeditionId, expeditionData.id)
    });

    let completedCount = 0;

    questions.forEach((questionElement) => {
        if (questionElement.completed)
        {
            completedCount += 1;
        }
    });

    return {
        ...expeditionData,
        questionData: questions,
        completedCount: completedCount,
    };
})

