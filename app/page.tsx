import { getData } from "@/action/todos";
import Todos from "./todos";

export default async function Home() {
  const data = await getData();
  return <Todos todos={data} />;
}