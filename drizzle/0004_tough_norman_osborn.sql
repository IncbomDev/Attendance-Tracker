ALTER TABLE "attendance" ADD COLUMN "date" text NOT NULL;--> statement-breakpoint
ALTER TABLE "attendance" ADD COLUMN "check_in_time" timestamp;--> statement-breakpoint
ALTER TABLE "attendance" ADD COLUMN "check_out_time" timestamp;--> statement-breakpoint
ALTER TABLE "attendance" DROP COLUMN "action";--> statement-breakpoint
ALTER TABLE "attendance" DROP COLUMN "timestamp";