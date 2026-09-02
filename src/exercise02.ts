export function transcribeDNA(dna: string): string {
  const RNA: Record<string, string> = {
    "A" : "U",
    "T" : "A",
    "C" : "G",
    "G" : "C"
  };

  let result = "";
  for (const ch of dna) {
    if (!(ch in RNA)) {
      throw new TypeError();
    }
    result += RNA[ch];
  }
  return result;
}
