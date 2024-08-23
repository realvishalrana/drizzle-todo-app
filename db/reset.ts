import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { todo } from "./schema";

const sql = neon(process.env.NEON_DATABASE_URL!);
const db = drizzle(sql);

const main = async () => {
  try {
    console.log("Restarting database");
    await db.delete(todo);
    console.log("Database reset successful");
  } catch (error) {
    console.error("Failed to reset database:", error);
    throw new Error("Failed to reset database");
  }
};

main();
