'use server';

import db from "@/database/drizzle";
import { getQuestion } from "@/database/queries";
import { question } from "@/database/schema";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const completeQuestion = async (questionId: number) => {
    const { userId } = await auth();

    if (!userId)
    {
        throw new Error("Unauthenticated");
    }

    const questionData = await getQuestion(questionId);

    if (!questionData)
    {
        throw new Error("Question is not found.");
    }

    if (questionData.userId != userId)
    {
        throw new Error("Unauthorised");
    }

    await db.update(question).set({
        completed: true
    }).where(eq(question.id, questionId));

    revalidatePath('/quiz');
    revalidatePath('/graveyard');
}

export const addToGraveyard = async (questionId: number) => {
    const { userId } = await auth();

    if (!userId)
    {
        throw new Error("Unauthenticated");
    }

    const questionData = await getQuestion(questionId);

    if (!questionData)
    {
        throw new Error("Question is not found.");
    }

    if (questionData.userId != userId)
    {
        throw new Error("Unauthorised");
    }

    await db.update(question).set({
        inGraveyard: true,
    }).where(and(eq(question.id, questionId), eq(question.userId, userId)));

    revalidatePath('/quiz');
    revalidatePath('/graveyard');
}

export const removeFromGraveyard = async (questionId: number) => {
    const { userId } = await auth();

    if (!userId)
    {
        throw new Error("Unauthenticated");
    }

    const questionData = await getQuestion(questionId);

    if (!questionData)
    {
        throw new Error("Question is not found.");
    }

    if (questionData.userId != userId)
    {
        throw new Error("Unauthorised");
    }

    await db.update(question).set({
        inGraveyard: false,
    }).where(and(eq(question.id, questionId), eq(question.userId, userId)));
    
    revalidatePath('/quiz');
    revalidatePath('/graveyard');
}