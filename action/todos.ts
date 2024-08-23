"use server";
import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";
import { desc, eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const addTodo = async (text: string) => {
  const data = await db.insert(todo).values({
    text: text,
  });
  return data;
};

export const getData = async () => {
  const data = await db.select().from(todo).orderBy(desc(todo.createAt));
  return data;
};

export const editTodo = async (id: number, text: string) => {
  await db
    .update(todo)
    .set({
      text: text,
    })
    .where(eq(todo.id, id));
  revalidatePath("/");
};

export const toggleTodo = async (id: number) => {
  await db
    .update(todo)
    .set({
      done: not(todo.done),
    })
    .where(eq(todo.id, id));
  revalidatePath("/");
};

export const deleteTodo = async (id: number) => {
  await db.delete(todo).where(eq(todo.id, id));
  revalidatePath("/");
};
