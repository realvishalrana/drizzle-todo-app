import { todo } from "@/db/schema";

export type todoType = typeof todo.$inferSelect;

// export type todoType = {
//   id: number;
//   text: string;
//   done: boolean;
// };
