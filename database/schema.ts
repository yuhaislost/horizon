import { relations } from 'drizzle-orm';
import { pgTable, text, serial, integer, boolean, timestamp} from 'drizzle-orm/pg-core';

export const streak = pgTable('streak', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull().unique(),
  ammount: integer('ammount').default(0),
  lastIncrement: timestamp('last_increment').defaultNow().notNull(),
});

export const hearts = pgTable('hearts', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull().unique(),
  ammount: integer('ammount').default(10).notNull(),
  lastIncrement: timestamp('last_increment').defaultNow().notNull(),
});

export const balance = pgTable('balance', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull().unique(),
  ammount: integer('ammount').default(0),
});

export const knowledgeBase = pgTable('knowledge_base', {
  id: serial('id').primaryKey(),
  userId: text("user_id").notNull().unique(),
  content: text("content").notNull(),
});


export const expedition = pgTable('expedition', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull().unique(),
  planetId: text('planet_id').notNull(),
  completed: boolean('completed').notNull().default(false),
  completedAt: timestamp('completed_at'),
  createdAt: timestamp('created_at').defaultNow().notNull()
});

export const expeditionRelation = relations(expedition, ({ many }) => ({
  questions: many(question),
}));

export const question = pgTable('question', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull().unique(),
  questionContent: text("question_content").notNull(),
  inGraveyard: boolean('in_graveyard').notNull().default(true),
  expeditionId: serial("expedition_id").references(() => expedition.id, {
    onDelete: 'cascade',
  }).notNull(),
  options: text('options').array().notNull().default([]),
  answer: integer('answer').notNull(),
  completed: boolean('completed').default(false),
});

export const questionsRelation = relations(question, ({ one }) => ({
  expedition: one(expedition, {
    fields: [question.expeditionId],
    references: [expedition.id]
  })
}));
