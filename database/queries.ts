import { eq, and, or, sql } from 'drizzle-orm';
import { db } from '.';
import { streak, hearts, balance, quest, currentQuest, question } from './schema';


// Streak
export async function getStreak(userId: string) {
  return db.select().from(streak).where(eq(streak.user_id, userId)).execute();
}

// Hearts
export async function getHearts(userId: string) {
  return db.select().from(hearts).where(eq(hearts.user_id, userId)).execute();
}

// Balance
export async function getBalance(userId: string) {
  return db.select().from(balance).where(eq(balance.user_id, userId)).execute();
}

// Quest
export async function getQuest(userId: string) {
  return db.select().from(quest).where(eq(quest.user_id, userId)).execute();
}