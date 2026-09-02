import * as fs from "fs";

export async function logStatusToFile(
  filePath: string,
  statusMessage: string,
): Promise<void> {
  const message = `${statusMessage}, ${new Date().toISOString()}\n`;
  await fs.promises.appendFile(filePath, message);
}
