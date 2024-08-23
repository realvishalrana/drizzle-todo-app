import { boolean, pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
  createAt: timestamp("created_at").defaultNow().notNull(),
});
