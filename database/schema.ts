import { pgTable, bigint, text, varchar, integer, boolean, timestamp, json, primaryKey, smallint } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  user_id: text('user_id').primaryKey().notNull(),
  firstName: varchar('firstName', { length: 255 }),
  lastName: varchar('lastName', { length: 255 }),
  email: varchar('email', { length: 255 }).unique(),
  username: varchar('username', { length: 255 }).unique(),
  passwordHash: varchar('passwordHash', { length: 255 }),
  profile: text('profile'),
  lastLogin: timestamp('lastLogin'),
  lostHeartTime: timestamp('lostHeartTime')
});

export const streak = pgTable('streak', {
  user_id: text('user_id').primaryKey().notNull().references(() => user.user_id, { onDelete: 'cascade' }),
  count: integer('count'),
  updated: timestamp('updated')
});

export const hearts = pgTable('hearts', {
  user_id: text('user_id').primaryKey().notNull().references(() => user.user_id, { onDelete: 'cascade' }),
  count: smallint('count'),
  updated: timestamp('updated')
});

export const balance = pgTable('balance', {
  user_id: text('user_id').primaryKey().notNull().references(() => user.user_id, { onDelete: 'cascade' }),
  count: integer('count')
});

export const quest = pgTable('quest', {
  user_id: text('user_id').primaryKey().notNull().references(() => user.user_id, { onDelete: 'cascade' }),
  count: integer('count')
});

export const currentQuest = pgTable('currentQuest', {
  user_id: text('user_id').primaryKey().notNull().references(() => user.user_id, { onDelete: 'cascade' }),
  questInput: text('questInput'),
  context: text('context'),
  questData: json('questData'),
  completed: boolean('completed')
});

export const question = pgTable('question', {
  user_id: text('user_id').primaryKey().notNull().references(() => user.user_id, { onDelete: 'cascade' }),
  question_id: text('question_id').notNull().references(() => currentQuest.user_id, { onDelete: 'cascade' }),
  type: varchar('type', { length: 255 }),
  description: text('description'),
  questionText: text('question'),
  answer: text('answer'),
  options: json('options'),
  answerGuide: text('answerGuide'),
  isInGraveyard: boolean('isInGraveyard')
});
