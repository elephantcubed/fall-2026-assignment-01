import { totalmem } from "os";

export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number {
return inventory.filter((item) => item[1] > 5).reduce((total, item) => total + item[1] * item[2], 0);
}