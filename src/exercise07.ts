import * as fs from "fs";

export type Gradebook = {
  [studentName: string]: {
    [subject: string]: number;
  }
}

export function calculateSubjectAverage(subject: string): number {
  const rawData = fs.readFileSync("data/gradebook.json", "utf-8");
  const gb: Gradebook = JSON.parse(rawData);

  let count = 0;
  let total = 0;

  for (const student in gb) {
    if (gb[student][subject]) {
      total += gb[student][subject];
      count++
    }
  }
  return count > 0 ? total / count : 0;
}
