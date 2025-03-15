'use server'

import { auth } from '@clerk/nextjs/server'
import { question, streak, hearts, quest, balance } from './schema'
import { db } from '.'
import { eq } from 'drizzle-orm'
import { randomUUID } from 'crypto'; // For generating a unique question ID

// Question CUD
export async function createQuestion(formData: FormData) {
  const { userId } = await auth()
  if (!userId) throw new Error('User not found')

  const type = formData.get('type') as string
  const description = formData.get('description') as string
  const questionText = formData.get('questionText') as string
  const answer = formData.get('answer') as string
  const options = JSON.parse(formData.get('options') as string)
  const answerGuide = formData.get('answerGuide') as string
  let isInGraveyard = formData.get('isInGraveyard') === 'true'

  await db.insert(question).values({
    user_id: userId,
    question_id: randomUUID(),
    type,
    description,
    questionText: questionText,
    answer,
    options,
    answerGuide,
    isInGraveyard,
  })
}

export async function setQuestionGraveyard(userId: string, questionId: string, isInGraveyard: boolean) {
  return db.insert(question)
    .values({ user_id: userId, question_id: questionId, isInGraveyard })
    .onConflictDoUpdate({
      target: [question.user_id, question.question_id], 
      set: { isInGraveyard }
    })
    .returning();
}

export async function deleteQuestion(questionId: Text) {
  const { userId } = await auth()
  if (!userId) throw new Error('User not found')

    await db.delete(question).where(eq(question.question_id, String(questionId)));
}

// Streak
export async function updateStreak(userId: string, count: number) {
  return db.insert(streak)
    .values({ user_id: userId, count, updated: new Date() })
    .onConflictDoUpdate({ target: streak.user_id, set: { count, updated: new Date() } })
    .returning();
}

// Hearts
export async function updateHearts(userId: string, count: number) {
  return db.insert(hearts)
    .values({ user_id: userId, count, updated: new Date() })
    .onConflictDoUpdate({ target: hearts.user_id, set: { count, updated: new Date() } })
    .returning();
}

// Balance
export async function updateBalance(userId: string, count: number) {
  return db.insert(balance)
    .values({ user_id: userId, count })
    .onConflictDoUpdate({ target: balance.user_id, set: { count } })
    .returning();
}

// Quest
export async function updateQuest(userId: string, count: number) {
  return db.insert(quest)
    .values({ user_id: userId, count })
    .onConflictDoUpdate({ target: quest.user_id, set: { count } })
    .returning();
}