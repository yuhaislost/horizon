CREATE TABLE "balance" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"ammount" integer DEFAULT 0,
	CONSTRAINT "balance_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
CREATE TABLE "expedition" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"completed" boolean DEFAULT false NOT NULL,
	"completed_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "expedition_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
CREATE TABLE "hearts" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"ammount" integer DEFAULT 10,
	"last_increment" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "hearts_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
CREATE TABLE "question" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"in_graveyard" boolean DEFAULT true NOT NULL,
	"expedition_id" serial NOT NULL,
	"options" text[] DEFAULT '{}' NOT NULL,
	"answer" text NOT NULL,
	"completed" boolean DEFAULT false,
	CONSTRAINT "question_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
CREATE TABLE "streak" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"ammount" integer DEFAULT 0,
	"last_increment" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "streak_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
ALTER TABLE "question" ADD CONSTRAINT "question_expedition_id_expedition_id_fk" FOREIGN KEY ("expedition_id") REFERENCES "public"."expedition"("id") ON DELETE cascade ON UPDATE no action;