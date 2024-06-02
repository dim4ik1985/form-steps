import { isValidDate } from "./validator.ts";

export function Convertor(date: string): [number, string] {
  const d = isValidDate(date)[1];
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const id = `${day}.${month}.${year}`;
  return [d.getTime(), id];
}
